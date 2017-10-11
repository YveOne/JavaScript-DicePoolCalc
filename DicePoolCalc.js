
/*************************************************************************\
* Functions for dice pool calculation
* (c) Yvonne P. (agita[at]live[dot]de)
\*************************************************************************/

var DPC = {

    /**
    * getPipsList(3,4,false) = 3,4,5,6,4,5,6,7,5,6,7,8,6,7,8,9,4,5,6,7,5,6,7,8,6,7,8,9,7,8,9,10,5,6,7,8,6,7,8,9,7,8,9,10,8,9,10,11,6,7,8,9,7,8,9,10,8,9,10,11,9,10,11,12
    */
    getPipsList : function(diceCount, diceSides, zeroBased)
    {
        if(diceCount*diceSides == 0) return [];
        var defaultPips = [];
        var returnPips = [];
        if(zeroBased===true)
        {
            for(var i=0; i<diceSides; i++)
            {
                defaultPips.push(i);
                returnPips.push(i);
            }
        }
        else
        {
            for(var i=1; i<=diceSides; i++)
            {
                defaultPips.push(i);
                returnPips.push(i);
            }
        }
        for(var i=1; i<diceCount; i++)
            returnPips = DPC.squareResults(returnPips, defaultPips);
        return returnPips;
    },

    /**
    * arraySumValues([0,0,0,1,2,1,2,]) = 6
    */
    arraySumValues : function(r)
    {
        var s = 0;
        for(var i=0; i<r.length; i++)
            s += r[i];
        return s;
    },

    /**
    * arrayMaxValue([0,0,0,1,2,1,2,3,3,2,3,4,3,2]) = 4
    */
    arrayMaxValue : function(r)
    {
        var m = 0;
        for(var i=0; i<r.length; i++)
            if(r[i] > m)
                m = r[i];
        return m;
    },

    /**
    * l r = result
    * 0+0 = 0
    * 1+0 = 1
    * 2+0 = 2
    * 0+1 = 1
    * 1+1 = 2
    * 2+1 = 3
    * 0+2 = 2
    * 1+2 = 3
    * 2+2 = 4
    * squareResults([0,1,2], [0,1,2]) = [0,1,2,1,2,3,2,3,4]
    */
    squareResults : function(left, right)
    {
        var results = [];
        for(var i=0; i<left.length; i++)
            for(var j=0; j<right.length; j++)
                results.push(left[i]+right[j]);
        return results;
    },

    /**
    * getPipsCounts([2,3,4,3,3,4]) = [0,0,1,3,2]
    */
    getPipsCounts : function(r)
    {
        var max = DPC.arrayMaxValue(r);
        var occ = [];
        for(var i=0; i<=max; i++) occ.push(0);
        for(var i=0; i<r.length; i++) occ[r[i]]++;
        return occ;
    },

    /**
    * getPipsCountsPercents([0,0,1,3,2]) = [0, 0, 16.67, 50.0, 33.33]
    */
    getPipsCountsPercents : function(occ)
    {
        var sum = DPC.arraySumValues(occ);
        var perc = [];
        for(var i=0; i<occ.length; i++)
            perc[i] = occ[i] / sum;
        return perc;
    },

};
