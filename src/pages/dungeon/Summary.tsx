import {ConfigProvider, Image, Table, Typography} from "antd/lib";
import React from "react";
import dungeons from "../../datasources/dungeons.json";
import './Summary.scss';

function DungeonSummary() {
    const parsedDungeons = dungeons.map((item: any, idx: number) => {
        return {...item, no: idx + 1}
    })
    return <article className="dungeon-contents">
        <ConfigProvider theme={{components: {Pagination: {colorPrimary: '#F94709'}}}}>
            <Table
                bordered
                className="dungeon-table"
                pagination={{position: ["topRight", "bottomRight"], defaultPageSize: 50, size: "small"}}
                columns={[
                    {
                        key: "no",
                        dataIndex: "no",
                        title: "순서",
                        align: "center",
                        width: 80
                    },
                    {
                        key: "category1",
                        dataIndex: "category1",
                        title: "지역",
                        align: "center",
                        render: (val: string) => {
                            return <Typography.Link href={`#/area?name=${val}`}>{val}</Typography.Link>
                        }
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
                            return val ? <Image src={val} width={80}/> : <span>-</span>
                        }
                    },
                    {
                        key: "dungeon_desc",
                        dataIndex: "dungeon_desc",
                        title: "던전설명",
                        align: "center",
                        render: (val: string) => {
                            return val ? <Image src={val} width={80}/> : <span>-</span>
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
                dataSource={parsedDungeons}
            />
        </ConfigProvider>
    </article>
}

export default DungeonSummary;
