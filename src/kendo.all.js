(function(f, define){
    define([ "./kendo.web", "./kendo.dataviz", "./kendo.mobile", "./kendo.dom"  ], f);
})(function(){
    "bundle all";
}, typeof define == 'function' && define.amd ? define : function(_, f){ f(); });
