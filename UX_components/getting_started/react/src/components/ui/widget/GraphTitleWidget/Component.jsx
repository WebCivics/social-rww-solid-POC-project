import React, { useState } from 'react';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

const Component = ({progress}) => {
    const option = {
        color: ['#B4E6D7'],
        tooltip: {
            trigger: 'axis',
            // backgroundColor: 'white',
            // axisPointer : {
            //     axis: 'x'
            // }
        },
        grid: {
            left: '0%',
            right: '0%'
        },
        xAxis: [
            {   
                boundaryGap: false,
                show: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        ],
        yAxis: [
            {
                show: false,
            }
        ],
        series: [
            {
                type: 'line',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        backgroundColor: 'white'
                    }
                },
                areaStyle: {'backgroundColor':'green'},
                data: [140, 115, 130, 100, 151, 160, 120, 140, 122]
            }
        ]
    };

    const [refreshOne, setRefreshOne] = useState(false);

    return (
        <div className="widget-4 card   no-margin widget-loader-bar">
            <div className="container-sm-height full-height d-flex flex-column">
                <div className="card-header  ">
                    <div className="card-title text-black hint-text">
                        <span className="d-flex align-items-center">
                            <span className="font-montserrat fs-11 all-caps">Product revenue </span>
                            <i className="pg-icon">chevron_right</i>
                        </span>
                    </div>
                    <div className="card-controls">
                        <ul>
                            <li>
                                <a data-toggle="refresh" className={`card-refresh ${refreshOne ? 'refreshing' : ''} text-black`} href="#" 
                                  onClick={(e) => {
                                    e.preventDefault()
                                    setRefreshOne(true);
                                    setTimeout(() => {
                                      setRefreshOne(false)
                                    }, 2000)
                                  }}
                                >                                  
                                  <i className={`card-icon card-icon-refresh ${refreshOne ? 'fade' : ''}`}></i>
                                  <i className={`card-icon-refresh-lg-white-animated ${refreshOne ? 'active' : ''}`} style={{"position": "absolute", "top": "14px", "right": "20px"}}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-l-20 p-r-20">
                    <h5 className="no-margin p-b-5 pull-left text-success">Webarch</h5>
                    <p className="pull-right no-margin bold hint-text">2,563</p>
                    <div className="clearfix"></div>
                </div>
                <div className="widget-4-chart line-chart mt-auto" data-line-color="success" data-area-color="success-light" data-y-grid="false" data-points="false" data-stroke-width="2">
                    <ReactEcharts 
                        option={option}
                        style={{}}
                    />
                    {refreshOne ? progress : null }
                </div>
            </div>
        </div>
    )
}

export default Component
