

// START JAVASCRIPT
(function() {;
var ρσ_modules = {};
ρσ_modules.pythonize = {};

(function(){
    function strings() {
        var string_funcs, exclude, name;
        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
        if (!arguments.length) {
            exclude = (function(){
                var s = ρσ_set();
                s.jsset.add("split");
                s.jsset.add("replace");
                return s;
            })();
        } else if (arguments[0]) {
            exclude = Array.prototype.slice.call(arguments);
        } else {
            exclude = null;
        }
        if (exclude) {
            string_funcs = string_funcs.difference(set(exclude));
        }
        var ρσ_Iter0 = string_funcs;
        ρσ_Iter0 = ((typeof ρσ_Iter0[Symbol.iterator] === "function") ? (ρσ_Iter0 instanceof Map ? ρσ_Iter0.keys() : ρσ_Iter0) : Object.keys(ρσ_Iter0));
        for (var ρσ_Index0 of ρσ_Iter0) {
            name = ρσ_Index0;
            (ρσ_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name];
        }
    };
    if (!strings.__module__) Object.defineProperties(strings, {
        __module__ : {value: "pythonize"}
    });

    ρσ_modules.pythonize.strings = strings;
})();
async function __main__() {
"use strict";

    var version, display, vector, print, arange, __name__, type, scene, ρσ_ls, _GS_1, g, n, i, a, n1, arr;
    version = ρσ_list_decorate([ "3.1", "glowscript" ]);
    Array.prototype['+'] = function(r) {return this.concat(r)}
    Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
    window.__GSlang = "vpython";
    display = canvas;
    vector = vec;
    print = GSprint;
    arange = range;
    __name__ = "__main__";
    type = pytype;
    scene = canvas();
    fontloading();
    await waitforfonts();
    var strings = ρσ_modules.pythonize.strings;

    strings();
    "2";
    function Graph() {;
    }
    Graph.prototype.__init__ = async function __init__() {
            };
    Graph.prototype.dfs = async function dfs(visited, gr, node) {
        var self = this;
        var ρσ_ls, neighbour;
        "11";
        if (!ρσ_in(node, visited)) {
            "12";
            ρσ_interpolate_kwargs.call(this, print, (await [node].concat([ρσ_desugar_kwargs({end: " "})])));
            "13";
            visited.append(node);
            "14";
            var ρσ_Iter1 = gr[(typeof node === "number" && node["<"](0)) ? gr.length["+"](node) : node];
            ρσ_Iter1 = ((typeof ρσ_Iter1[Symbol.iterator] === "function") ? (ρσ_Iter1 instanceof Map ? ρσ_Iter1.keys() : ρσ_Iter1) : Object.keys(ρσ_Iter1));
            for (var ρσ_Index1 of ρσ_Iter1) {
                neighbour = ρσ_Index1;
                "15";
                (await dfs(visited, gr, neighbour));
            }
        }
    };
    if (!Graph.prototype.dfs.__argnames__) Object.defineProperties(Graph.prototype.dfs, {
        __argnames__ : {value: ["visited", "gr", "node"]},
        __module__ : {value: null}
    });
    Graph.prototype.bfs = async function bfs(node) {
        var self = this;
        var ρσ_ls, visited, queue, s, neighbour;
        "21";
        visited = ρσ_list_decorate([]);
        "22";
        queue = ρσ_list_decorate([]);
        "26";
        visited.append(node);
        "27";
        queue.append(node);
        "28";
        while (len(queue)[">"](0)) {
            "30";
            s = queue.pypop(0);
            "32";
            ρσ_interpolate_kwargs.call(this, print, (await [s].concat([ρσ_desugar_kwargs({end: " "})])));
            "35";
            if (ρσ_equals(len((ρσ_expr_temp = self.graph_dict)[(typeof s === "number" && s["<"](0)) ? ρσ_expr_temp.length["+"](s) : s]), 0)) {
                "37";
                continue;
            }
            "38";
            var ρσ_Iter2 = (ρσ_expr_temp = self.graph_dict)[(typeof s === "number" && s["<"](0)) ? ρσ_expr_temp.length["+"](s) : s];
            ρσ_Iter2 = ((typeof ρσ_Iter2[Symbol.iterator] === "function") ? (ρσ_Iter2 instanceof Map ? ρσ_Iter2.keys() : ρσ_Iter2) : Object.keys(ρσ_Iter2));
            for (var ρσ_Index2 of ρσ_Iter2) {
                neighbour = ρσ_Index2;
                "40";
                if (!ρσ_in(neighbour, visited)) {
                    "41";
                    visited.append(neighbour);
                    "42";
                    queue.append(neighbour);
                }
            }
        }
    };
    if (!Graph.prototype.bfs.__argnames__) Object.defineProperties(Graph.prototype.bfs, {
        __argnames__ : {value: ["node"]},
        __module__ : {value: null}
    });
    Graph.prototype.addEdge = async function addEdge(node, neighbour) {
        var self = this;
        "49";
        if (!ρσ_in(node, self.nodes)) {
            "50";
            self.nodes.append(node);
            "51";
            if (!ρσ_in(neighbour, self.nodes)) {
                "52";
                self.nodes.append(neighbour);
                "55";
            }
        }
        if (!ρσ_in(node, self.graph_dict)) {
            "56";
            (ρσ_expr_temp = self.graph_dict)[(typeof node === "number" && node["<"](0)) ? ρσ_expr_temp.length["+"](node) : node] = ρσ_list_decorate([ neighbour ]);
            "57";
            if (!ρσ_in(neighbour, self.graph_dict)) {
                "58";
                (ρσ_expr_temp = self.graph_dict)[(typeof neighbour === "number" && neighbour["<"](0)) ? ρσ_expr_temp.length["+"](neighbour) : neighbour] = ρσ_list_decorate([]);
                "60";
            }
        } else if (ρσ_in(node, self.graph_dict) && !ρσ_in(neighbour, (ρσ_expr_temp = self.graph_dict)[(typeof node === "number" && node["<"](0)) ? ρσ_expr_temp.length["+"](node) : node])) {
            "61";
            (ρσ_expr_temp = self.graph_dict)[(typeof node === "number" && node["<"](0)) ? ρσ_expr_temp.length["+"](node) : node].append(neighbour);
        }
    };
    if (!Graph.prototype.addEdge.__argnames__) Object.defineProperties(Graph.prototype.addEdge, {
        __argnames__ : {value: ["node", "neighbour"]},
        __module__ : {value: null}
    });
    Graph.prototype.show_edges = async function show_edges() {
        var self = this;
        var ρσ_ls, neighbour, node;
        "65";
        var ρσ_Iter3 = self.graph_dict;
        ρσ_Iter3 = ((typeof ρσ_Iter3[Symbol.iterator] === "function") ? (ρσ_Iter3 instanceof Map ? ρσ_Iter3.keys() : ρσ_Iter3) : Object.keys(ρσ_Iter3));
        for (var ρσ_Index3 of ρσ_Iter3) {
            node = ρσ_Index3;
            "66";
            var ρσ_Iter4 = (ρσ_expr_temp = self.graph_dict)[(typeof node === "number" && node["<"](0)) ? ρσ_expr_temp.length["+"](node) : node];
            ρσ_Iter4 = ((typeof ρσ_Iter4[Symbol.iterator] === "function") ? (ρσ_Iter4 instanceof Map ? ρσ_Iter4.keys() : ρσ_Iter4) : Object.keys(ρσ_Iter4));
            for (var ρσ_Index4 of ρσ_Iter4) {
                neighbour = ρσ_Index4;
                "67";
                print("(Node:", node, ", Neighbour:", neighbour, ")");
                "68";
                print();
            }
        }
        "69";
        print(self.nodes);
    };
    if (!Graph.prototype.show_edges.__module__) Object.defineProperties(Graph.prototype.show_edges, {
        __module__ : {value: null}
    });
    Graph.prototype.renderGraph = async function renderGraph() {
        var self = this;
        var ρσ_ls, tempx, tempy, tempz, tempyup, tempydown, nodeSphere, T, count, neighbourSphere, neighbour, node, c;
        "73";
        tempx = 0;
        "74";
        tempy = 0;
        "75";
        tempz = 0;
        "76";
        tempyup = .5;
        "77";
        tempydown = .5["-u"]();
        "78";
        var ρσ_Iter5 = self.graph_dict;
        ρσ_Iter5 = ((typeof ρσ_Iter5[Symbol.iterator] === "function") ? (ρσ_Iter5 instanceof Map ? ρσ_Iter5.keys() : ρσ_Iter5) : Object.keys(ρσ_Iter5));
        for (var ρσ_Index5 of ρσ_Iter5) {
            node = ρσ_Index5;
            "79";
            if (!ρσ_in(node, self.nodeObjects)) {
                "80";
                nodeSphere = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(tempx, tempy, tempz), radius: .05, color: color.green})]);
                "81";
                T = ρσ_interpolate_kwargs.call(this, text, [ρσ_desugar_kwargs({text: str(node), pos: vector(tempx, tempy, tempz["+"](.1)), align: "center", height: .075, color: color.white})]);
                "82";
                (ρσ_expr_temp = self.nodeObjects)[(typeof node === "number" && node["<"](0)) ? ρσ_expr_temp.length["+"](node) : node] = nodeSphere;
                "84";
                print(node, nodeSphere.pos);
            }
            "86";
            count = 1;
            "88";
            var ρσ_Iter6 = (ρσ_expr_temp = self.graph_dict)[(typeof node === "number" && node["<"](0)) ? ρσ_expr_temp.length["+"](node) : node];
            ρσ_Iter6 = ((typeof ρσ_Iter6[Symbol.iterator] === "function") ? (ρσ_Iter6 instanceof Map ? ρσ_Iter6.keys() : ρσ_Iter6) : Object.keys(ρσ_Iter6));
            for (var ρσ_Index6 of ρσ_Iter6) {
                neighbour = ρσ_Index6;
                "90";
                if ((count === 1 || typeof count === "object" && ρσ_equals(count, 1))) {
                    "91";
                    tempy = 0;
                    "94";
                }
                if (!ρσ_in(neighbour, self.nodeObjects)) {
                    "95";
                    if ((count === 1 || typeof count === "object" && ρσ_equals(count, 1))) {
                        "96";
                        tempx = tempx["+"](.5);
                    }
                    "97";
                    neighbourSphere = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(tempx, tempy, tempz), radius: .05, color: color.green})]);
                    "98";
                    (ρσ_expr_temp = self.nodeObjects)[(typeof neighbour === "number" && neighbour["<"](0)) ? ρσ_expr_temp.length["+"](neighbour) : neighbour] = neighbourSphere;
                    "99";
                    T = ρσ_interpolate_kwargs.call(this, text, [ρσ_desugar_kwargs({text: str(neighbour), pos: vector(tempx, tempy, tempz["+"](.1)), align: "center", height: .075, color: color.white})]);
                    "100";
                    print(" ", neighbour, neighbourSphere.pos);
                    "103";
                    if (ρσ_equals(count["%"](2), 0)) {
                        "104";
                        tempy = 0["+"](tempyup);
                        "105";
                        tempyup = tempyup["+"](.5);
                        "106";
                    } else {
                        "107";
                        tempy = 0["+"](tempydown);
                        "108";
                        tempydown = tempydown["-"](.5);
                    }
                    "109";
                    count = count["+"](1);
                }
            }
            "113";
            tempy = 0;
        }
        "114";
        var ρσ_Iter7 = self.graph_dict;
        ρσ_Iter7 = ((typeof ρσ_Iter7[Symbol.iterator] === "function") ? (ρσ_Iter7 instanceof Map ? ρσ_Iter7.keys() : ρσ_Iter7) : Object.keys(ρσ_Iter7));
        for (var ρσ_Index7 of ρσ_Iter7) {
            node = ρσ_Index7;
            "115";
            var ρσ_Iter8 = (ρσ_expr_temp = self.graph_dict)[(typeof node === "number" && node["<"](0)) ? ρσ_expr_temp.length["+"](node) : node];
            ρσ_Iter8 = ((typeof ρσ_Iter8[Symbol.iterator] === "function") ? (ρσ_Iter8 instanceof Map ? ρσ_Iter8.keys() : ρσ_Iter8) : Object.keys(ρσ_Iter8));
            for (var ρσ_Index8 of ρσ_Iter8) {
                neighbour = ρσ_Index8;
                "116";
                print(node, neighbour);
                "118";
                c = curve((ρσ_expr_temp = self.nodeObjects)[(typeof node === "number" && node["<"](0)) ? ρσ_expr_temp.length["+"](node) : node].pos, (ρσ_expr_temp = self.nodeObjects)[(typeof neighbour === "number" && neighbour["<"](0)) ? ρσ_expr_temp.length["+"](neighbour) : neighbour].pos);
            }
        }
    };
    if (!Graph.prototype.renderGraph.__module__) Object.defineProperties(Graph.prototype.renderGraph, {
        __module__ : {value: null}
    });
    Graph.prototype.__repr__ = async function __repr__() {
                return "<"["+"](__name__)["+"](".")["+"](this.constructor.name)["+"](" #")["+"](this.ρσ_object_id)["+"](">");
    };
    Graph.prototype.__str__ = async function __str__() {
        return (await this.__repr__());
    };
    Object.defineProperty(Graph.prototype, "__bases__", {value: []});
    
    Graph.prototype.graph_dict = {};
    
    Graph.prototype.nodes = ρσ_list_decorate([]);
    
    Graph.prototype.nodeObjects = {};
    
    
    
    
    

    "127";
    _GS_1 = new Graph;
    (await _GS_1.__init__());
    g = _GS_1;
    (await sleep(.1));
    "139";
    n = input("enter the no of nodes");
    "140";
    for (var ρσ_Index9 = 0; ρσ_Index9["<"](n); ρσ_Index9++) {
        i = ρσ_Index9;
        "141";
        (ρσ_expr_temp = g.graph_dict)[(typeof i === "number" && i["<"](0)) ? ρσ_expr_temp.length["+"](i) : i] = ρσ_list_decorate([]);
    }
    (await sleep(.1));
    "143";
    n = input("Enter the number of edges");
    "144";
    for (var ρσ_Index10 = 0; ρσ_Index10["<"](n); ρσ_Index10++) {
        i = ρσ_Index10;
        (await sleep(.1));
        "145";
        a = input("enter the vertices of "["+"](i["+"](1))["+"]("th edge in u-v format"));
        "146";
        a = (await a.split("-"));
        "147";
        (await g.addEdge(int(a[0]), int(a[1])));
    }
    "160";
    (await g.renderGraph());
    "161";
    print(g.nodeObjects);
    "162";
    print(g.graph_dict);
    (await sleep(.1));
    "163";
    n1 = input("Enter the starting element for BFS and DFS");
    "164";
    print("BFS = ");
    "165";
    (await g.bfs(n1));
    "166";
    print();
    "167";
    print("DFS = ");
    "168";
    arr = ρσ_list_decorate([]);
    "169";
    (await g.dfs(arr, g.graph_dict, n1));
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT

