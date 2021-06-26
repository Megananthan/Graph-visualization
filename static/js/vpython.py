# GlowScript 3.0 VPython
class Graph:
    
    graph_dict={}
    nodes = []
    nodeObjects = {}
                  
    
    def dfs(self,visited, gr, node):
        
        if node not in visited:
            print(node,end=" ")
            visited.append(node)
            for neighbour in gr[node]:
                dfs(visited, gr, neighbour)
        



    def bfs(self,node):
        visited = [] 
        queue = []     
                
        visited.append(node)
        queue.append(node)
        while len(queue)>0:
#            print("b4 pop queue ",queue)
            s = queue.pop(0)
#            print("aft pop  queue ",queue)
            print (s, end = " ") 

#            print(self.graph_dict[s])
            if len(self.graph_dict[s])==0:
#                print("inside check 50")
                continue
            for neighbour in self.graph_dict[s]: 
#                print(neighbour," of ",self.graph_dict[s] )
                if neighbour not in visited:
                    visited.append(neighbour)
                    queue.append(neighbour)



    
    def addEdge(self,node,neighbour):
        
        if node not in self.nodes:
            self.nodes.append(node)
            if(neighbour not in self.nodes):
                self.nodes.append(neighbour)
                
                
        if node not in self.graph_dict:
            self.graph_dict[node]=[neighbour]
            if neighbour not in self.graph_dict:
                self.graph_dict[neighbour]=[]

        elif(node in self.graph_dict and neighbour not in self.graph_dict[node]):
            self.graph_dict[node].append(neighbour)
        
            
    def show_edges(self):
        for node in self.graph_dict:
            for neighbour in self.graph_dict[node]:
                print("(Node:",node,", Neighbour:",neighbour,")")
                print()
        print(self.nodes)
        
        
    def renderGraph(self):
        tempx = 0.0
        tempy = 0.0
        tempz = 0.0
        tempyup = 0.5
        tempydown = -0.5
        for node in self.graph_dict:
            if(node not in self.nodeObjects):
                nodeSphere = sphere(pos=vector(tempx,tempy,tempz), radius=0.05 ,color=color.green)
                T = text(text=str(node),pos=vector(tempx,tempy,tempz+0.1),align='center',height = 0.075, color=color.white)
                self.nodeObjects[node] = nodeSphere
#                tempx = tempx + 0.5
                print(node,nodeSphere.pos)
                
            count = 1
#            print(node,tempx,tempy,count)
            for neighbour in self.graph_dict[node]:
                
                if(count == 1):
                    tempy = 0.0
#                print(' ',tempx, tempy, end = '')
                
                if(neighbour not in self.nodeObjects):
                    if(count == 1):
                        tempx = tempx + 0.5
                    neighbourSphere = sphere(pos=vector(tempx,tempy,tempz), radius=0.05 ,color=color.green)
                    self.nodeObjects[neighbour] = neighbourSphere
                    T = text(text=str(neighbour),pos=vector(tempx,tempy,tempz+0.1),align='center',height = 0.075, color=color.white)
                    print(" ",neighbour,neighbourSphere.pos)
#                    pointer = arrow(pos=self.nodeObjects[node].pos,axis=neighbourSphere.pos, shaftwidth=0.05)
#                    print(neighbour,neighbourSphere.pos)
                    if(count%2 == 0):
                        tempy = 0.0 + tempyup
                        tempyup = tempyup + 0.5
                    else:
                        tempy = 0.0 + tempydown
                        tempydown = tempydown - 0.5
                    count = count + 1
#                print(" ",neighbour,count)
                
                
            tempy = 0.0
        for node in self.graph_dict:
            for neighbour in self.graph_dict[node]:
                print(node, neighbour)
#                pointer = arrow(pos=self.nodeObjects[node].pos,axis=self.nodeObjects[neighbour].pos, shaftwidth=0.05)
                c = curve(self.nodeObjects[node].pos, self.nodeObjects[neighbour].pos)
                
        
        
#s = sphere(pos=vector(0,0,0), radius=0.05 ,color=color.green,make_trail=True)        
#while(s.pos != (0.5,-0.5,0)):
#    rate(10)
#    s.pos.x += 0.1
#    s.pos.y -= 0.1
g= Graph()
#g.addEdge('1', '6')
#g.addEdge('1', '2')  
#g.addEdge('1', '3')
#g.addEdge('2', '4')
#g.addEdge('3', '4')
#g.addEdge('3', '6')
#g.addEdge('4', '5')
#g.addEdge('5', '6')
#g.addEdge('2', '3')


n=input("enter the no of nodes")
for i in range(n):
    g.graph_dict[i]=[]

n=input("Enter the number of edges")
for i in range(0,n):
    a=input("enter the vertices of "+(i+1)+"th edge in u-v format")
    a=a.split("-")
    g.addEdge(int(a[0]),int(a[1]))
    
    

#g.addEdge('1', '2')
#g.addEdge('1', '3')
#g.addEdge('2', '3')
#g.addEdge('2', '1')
#g.addEdge('3', '1')
#g.addEdge('3', '2')
#g.addEdge('3', '4')
#g.addEdge('4', '3')
#g.show_edges()
g.renderGraph()
print(g.nodeObjects)
print(g.graph_dict)
n1=input("Enter the starting element for BFS and DFS")
print("BFS = ")
g.bfs(n1)
print()
print("DFS = ")
arr=[]
g.dfs(arr,g.graph_dict,n1)
#g.dfs(arr,n1)
