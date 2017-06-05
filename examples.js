



var examples = [];
function exampleAdd(title, pseudo, func)
{
    examples.push({title:title,func:func,pseudo:pseudo,});
}




exampleAdd(
    "1a) Simple 1d6",
    "RESULT= roll(1d6)",
    function simple1d6(zeroBased)
    {
        return DPC.getPipsList(1, 6, zeroBased);
    }
);

exampleAdd(
    "1b) Simple 2d6",
    "RESULT= roll(2d6)",
    function simple2d6(zeroBased)
    {
        return DPC.getPipsList(2, 6, zeroBased);
    }
);

exampleAdd(
    "1c) Simple 3d6",
    "RESULT= roll(3d6)",
    function simple3d6(zeroBased)
    {
        return DPC.getPipsList(3, 6, zeroBased);
    }
);

exampleAdd(
    "2a) simple 2d12",
    "RESULT= roll(2d12)",
    function simple2d12(zeroBased)
    {
        return DPC.getPipsList(2, 12, zeroBased);
    }
);

exampleAdd(
    "2b) two 2d6 - sum both",
    "RESULT= roll(2d6) + roll(2d6)",
    function two2d6_SumBoth(zeroBased)
    {
        var p1 = DPC.getPipsList(2, 6, zeroBased);
        var p2 = DPC.getPipsList(2, 6, zeroBased);
        var pips = [];
        for(var i1=0; i1<p1.length; i1++)
        for(var i2=0; i2<p2.length; i2++)
        {
            pips.push(p1[i1]+p2[i2]);
        }
        return pips;
    }
);

exampleAdd(
    "2c) simple 4d6 - (same as above but shorter)",
    "RESULT= roll(4d6)",
    function two2d6_SumBoth(zeroBased)
    {
        return DPC.getPipsList(4, 6, zeroBased);
    }
);

exampleAdd(
    "2d) two 2d12 - take highest",
    "RESULT= max( roll(2d12), roll(2d12) )",
    function two2d12_TakeHighest(zeroBased)
    {
        var p1 = DPC.getPipsList(2, 12, zeroBased);
        var p2 = DPC.getPipsList(2, 12, zeroBased);
        var pips = [];
        for(var i1=0; i1<p1.length; i1++)
        for(var i2=0; i2<p2.length; i2++)
        {
            pips.push(Math.max(p1[i1],p2[i2]));
        }
        return pips;
    }
);

exampleAdd(
    "2e) three 1d12 - sum highest and lowest (or drop middle)",
    "a=roll(1d12); b=roll(1d12); c=roll(1d12); RESULT= min(a,b,c) + max(a,b,c)",
    function three1d12_sumHighestLowest(zeroBased)
    {
        var p1 = DPC.getPipsList(1, 12, zeroBased);
        var p2 = DPC.getPipsList(1, 12, zeroBased);
        var p3 = DPC.getPipsList(1, 12, zeroBased);
        var pips = [];
        for(var i1=0; i1<p1.length; i1++)
        for(var i2=0; i2<p2.length; i2++)
        for(var i3=0; i3<p3.length; i3++)
        {
            pips.push( Math.max(p1[i1],p2[i2],p3[i3]) + Math.min(p1[i1],p2[i2],p3[i3]) );
        }
        return pips;
    }
);

exampleAdd(
    "2f) three 1d12 - sum all, subtract lowest",
    "a=roll(1d12); b=roll(1d12); c=roll(1d12); RESULT= a+b+c - min(a,b,c)",
    function three1d12_sumAll_subtractLowest(zeroBased)
    {
        var p1 = DPC.getPipsList(1, 12, zeroBased);
        var p2 = DPC.getPipsList(1, 12, zeroBased);
        var p3 = DPC.getPipsList(1, 12, zeroBased);
        var pips = [];
        for(var i1=0; i1<p1.length; i1++)
        for(var i2=0; i2<p2.length; i2++)
        for(var i3=0; i3<p3.length; i3++)
        {
            pips.push( p1[i1]+p2[i2]+p3[i3] - Math.min(p1[i1],p2[i2],p3[i3]) );
        }
        return pips;
    }
);

exampleAdd(
    "3a) two 1d24 - take highest",
    "RESULT= max( roll(1d24), roll(1d24) )",
    function two1d24_TakeHighest(zeroBased)
    {
        var p1 = DPC.getPipsList(1, 24, zeroBased);
        var p2 = DPC.getPipsList(1, 24, zeroBased);
        var pips = [];
        for(var i1=0; i1<p1.length; i1++)
        for(var i2=0; i2<p2.length; i2++)
        {
            pips.push( Math.max( p1[i1], p2[i2] ) );
        }
        return pips;
    }
);

exampleAdd(
    "3b) three 1d24 - take highest",
    "RESULT= max( roll(1d24), roll(1d24), roll(1d24) )",
    function three1d24_TakeHighest(zeroBased)
    {
        var p1 = DPC.getPipsList(1, 24, zeroBased);
        var p2 = DPC.getPipsList(1, 24, zeroBased);
        var p3 = DPC.getPipsList(1, 24, zeroBased);
        var pips = [];
        for(var i1=0; i1<p1.length; i1++)
        for(var i2=0; i2<p2.length; i2++)
        for(var i3=0; i3<p3.length; i3++)
        {
            pips.push( Math.max(p1[i1], p2[i2], p3[i3]) );
        }
        return pips;
    }
);

exampleAdd(
    "3c) four 1d24 - take highest",
    "RESULT= max( roll(1d24), roll(1d24), roll(1d24), roll(1d24) )",
    function (zeroBased)
    {
        var p1 = DPC.getPipsList(1, 24, zeroBased);
        var p2 = DPC.getPipsList(1, 24, zeroBased);
        var p3 = DPC.getPipsList(1, 24, zeroBased);
        var p4 = DPC.getPipsList(1, 24, zeroBased);
        var pips = [];
        for(var i1=0; i1<p1.length; i1++)
        for(var i2=0; i2<p2.length; i2++)
        for(var i3=0; i3<p3.length; i3++)
        for(var i4=0; i4<p4.length; i4++)
        {
            pips.push( Math.max(p1[i1], p2[i2], p3[i3], p4[i4]) );
        }
        return pips;
    }
);

exampleAdd(
    "3d) three 1d24 - drop lowest, take first (or second)",
    "abc=withoutLowest( [roll(1d24),roll(1d24),roll(1d24)] ); RESULT= abc[0]",
    function three1d24_dropLowest_noSum_takeFirst(zeroBased)
    {
        function spliceLowest(arr)
        {
            var lowI = 0;
            for(var i=0; i<arr.length; i++)
                if(arr[i]<arr[lowI])
                    lowI=i+0;
            return arr.splice(lowI, 1);
        }
        var p1 = DPC.getPipsList(1, 24, zeroBased);
        var p2 = DPC.getPipsList(1, 24, zeroBased);
        var p3 = DPC.getPipsList(1, 24, zeroBased);
        var pips = [];
        for(var i1=0; i1<p1.length; i1++)
        for(var i2=0; i2<p2.length; i2++)
        for(var i3=0; i3<p3.length; i3++)
        {
            var pAll = [p1[i1], p2[i2], p3[i3]];
            spliceLowest(pAll);
            pips.push(pAll[0]);
        }
        return pips;
    }
);

/*
exampleAdd(
    "",
    "",
    function (zeroBased)
    {
    }
);
*/
