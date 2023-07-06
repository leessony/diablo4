import React from 'react';
import {Table, Image} from "antd/lib";
import logo from '../diablo4_logo2.png';
import dungeons from "../datasources/dungeons.json";
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {/*    <p>*/}
                {/*        Edit <code>src/App.tsx</code> and save to reload.*/}
                {/*    </p>*/}
                {/*    <a*/}
                {/*        className="App-link"*/}
                {/*        href="https://reactjs.org"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*    >*/}
                {/*        Learn React*/}
                {/*    </a>*/}
            </header>
            <article className="dungeons">
                <Table
                    pagination={{position: ["topRight", "bottomRight"], defaultPageSize: 50, size: "small"}}
                    columns={[
                        {
                            key: "category1",
                            dataIndex: "category1",
                            title: "지역",
                            align: "center"
                        },
                        {
                            key: "dungeon_name",
                            dataIndex: "dungeon_name",
                            title: "던전명",
                            align: "center"

                        },
                        {
                            key: "map_src",
                            dataIndex: "map_src",
                            title: "던전지도",
                            align: "center",
                            render: (val: string) => {
                                return <Image src={val} width={80}/>
                            }
                        },
                        {
                            key: "dungeon_desc",
                            dataIndex: "dungeon_desc",
                            title: "던전설명",
                            align: "center",
                            render: (val: string) => {
                                return <Image src={val} width={80}/>
                            }
                        },
                        {
                            key: "representative_video",
                            dataIndex: "representative_video",
                            title: "대표영상",
                            align: "center",
                            render: (val: string) => {
                                return val ?
                                    <iframe width="200" src={`https://www.youtube.com/embed/${val}`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe> :
                                    <span>-</span>
                            }
                        }
                    ]}
                    dataSource={dungeons}
                />
            </article>
        </div>
    );
}

export default App;
