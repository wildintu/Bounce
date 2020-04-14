import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// import { DataManager, Query } from '@syncfusion/ej2-data';
// import createEngine, { 
//     DefaultLinkModel, 
//     DefaultNodeModel,
//     DiagramModel 
// } from '@projectstorm/react-diagrams';

// import {
//     CanvasWidget
// } from '@projectstorm/react-canvas-core';

const Diagram: React.FC<DiagramProps> = () => {

    // const engine = createEngine();

    // const node1 = new DefaultNodeModel({
    //     name: 'Node 1',
    //     color: 'rgb(0,192,255)',
    // });

    // node1.setPosition(100, 100);
    // let port1 = node1.addOutPort('Out');

    // const node2 = new DefaultNodeModel({
    //     name: 'Node 1',
    //     color: 'rgb(0,192,255)',
    // });

    // node2.setPosition(100, 100);
    // let port2 = node2.addOutPort('Out');

    // const link = port1.link<DefaultLinkModel>(port2);
    // link.addLabel('Hello World!');

    // const model = new DiagramModel();
    // model.addAll(node1, node2, link);
    // engine.setModel(model);

    // let diagramInstance: any;

    let node = [
        {
            id: "node1",
            height: 100,
            width: 100,
            offsetX: 500,
            offsetY: 200,
            style: {
                fill: '#6BA5D7',
                strokeColor: 'white'
            },
        },
        {
            id: "node2",
            height: 100,
            width: 100,
            offsetX: 300,
            offsetY: 200,
            style: {
                fill: '#6BA5D7',
                strokeColor: 'white'
            },
        }
    ];
    //     let data = [{
    //         id: 1,
    //         Label: 'StackPanel'
    //     },
    //     {
    //         id: 2,
    //         Label: 'Label',
    //         parentId: 1
    //     },
    //     {
    //         id: 3,
    //         Label: 'ListBox',
    //         parentId: 1
    //     },
    //     {
    //         id: 4,
    //         Label: 'StackPanel',
    //         parentId: 2
    //     },
    //     {
    //         id: 5,
    //         Label: 'Border',
    //         parentId: 2
    //     },
    //     {
    //         id: 6,
    //         Label: 'Border',
    //         parentId: 4
    //     },
    //     {
    //         id: 7,
    //         Label: 'Button',
    //         parentId: 4
    //     },
    //     {
    //         id: 8,
    //         Label: 'ContentPresenter',
    //         parentId: 5
    //     },
    //     {
    //         id: 9,
    //         Label: 'Text Block',
    //         parentId: 5
    //     },
    // ];

    // let items = new DataManager(data, new Query().take(7))
    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow" style={{ width: '100%', height: '800px' }}>
                    <div className="card-body">
                        <DiagramComponent
                            nodes={node}
                            id="diagram" />
                        {/* // ref={diagram => (diagramInstance = diagram)} */}
                        {/* // style={{width: '100%', height: '800px'}}  */}

                        {/* // created={() => { */}
                        {/* //     // Add node
            //     diagramInstance.add(node);
            // }}
                        {/* <CanvasWidget engine= { engine } /> */}
                        {/* // <Inject services={[DataBinding, MindMap]} /> */}
                    </div>
                </div>
            </section>
        </main>
    );


    {/* <h1 className="text-primary text-center">Diagram</h1>
<h4 className="text-primary text-center">text example exist here</h4> */}
    {/* <Link to ="/Diagram"><Button className="float-right">Let Get Started?</Button></Link> */ }
};

interface DiagramProps { };

export default Diagram;

// layout={{ */}
{/* //     //Sets layout type
//     type: 'MindMap'
// }} 
// //Configures data source for diagram
// dataSourceSettings={{
//     id: 'id',
//     parentId: 'parentId',
//     dataManager: items,
//     root: String(1)
// }}  */}
{/* Sets the default properties for nodes and connectors
getNodeDefaults={(obj) => { */}
{/* //     obj.shape = {
//         type: 'Text',
//         content: obj.data.Label,
//     };
//     obj.style = {
//         fill: '#6BA5D7',
//         strokeColor: 'none',
//         strokeWidth: 2
//     };
//     obj.borderColor = 'white';
//     obj.backgroundColor = '#6BA5D7';
//     obj.borderWidth = 1;
//     obj.shape.margin = {
//         left: 5,
//         right: 5,
//         top: 5,
//         bottom: 5
//     };
//     return obj;
// }} getConnectorDefaults={(connector, diagram) => {
//     connector.style = {
//         strokeColor: '#6BA5D7',
//         strokeWidth: 2
//     };
//     connector.targetDecorator.style.fill = '#6BA5D7';
//     connector.targetDecorator.style.strokeColor = '#6BA5D7';
//     connector.type = 'Orthogonal';
//     return connector;}}  */}