import React, { useState, useEffect } from 'react'
import { Line, HorizontalBar } from 'react-chartjs-2'
import { ProgressBar } from 'react-bootstrap';
import numeral from 'numeral'
import apiService from '../helpers/apiService';
import moment from 'moment'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const options1 = {
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                display: false,
                gridLines: {
                    display: false
                }
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
            },
        ],
    },
}
const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 4,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: false
                },
                type: "time",
                time: {
                    unit: 'month',
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: true,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};



function Chart({ casesType }) {

    const [days] = useState(30)
    const [chartData, setChartData] = useState()
    const [temp, setTemp] = useState([])
    const [ageGroup, setAgeGroup] = useState()
    const [horizontalChartData, setHorizontalChartData] = useState()
    const [topLocation, setTopLocation] = useState()
    const [topLocationData, setTopLocationData] = useState()
    const [chartTimeLime, setChartTimeLime] = useState()
    let _ageGroup = [0, 0, 0, 0, 0, 0, 0]
    let _counter = {}
    let _userRatioByGender = { Male: 0, Female: 0 }
    let _topLocation = {}

    const [userRationByGender, setUserRationByGender] = useState(_userRatioByGender)


    const bindChartData = (data) => {
        let bindedChartData = [];
        let LastDataPoint = 0
        for (let date in data) {
            if (LastDataPoint) {
                let newDataPoint = {
                    x: date,
                    y: data[date]
                }
                bindedChartData.push(newDataPoint);
            }
            LastDataPoint = data[date];
        }
        return bindedChartData
    }

    useEffect(() => {
        async function fetchStatus() {

            const resp = await (await apiService.get("/home/dashboard")).data

            await resp.forEach(function (obj) {

                var key1 = moment(obj.registrationDate).format('MM/01/YYYY')
                _counter[key1] = (_counter[key1] || 0) + 1

                var key2 = obj.gender
                _userRatioByGender[key2] = (_userRatioByGender[key2] || 0) + 1

                var key3 = obj.country
                _topLocation[key3] = (_topLocation[key3] || 0) + 1


                var key = moment(new Date()).format('YYYY') - moment(obj.dateOfBirth).format('YYYY')
                if (key <= 18) {
                    _ageGroup[0] = parseInt(_ageGroup[0]) + 1
                }
                else if (key > 18 && key <= 22) {
                    _ageGroup[1] = parseInt(_ageGroup[1]) + 1
                }
                else if (key > 22 && key <= 27) {
                    _ageGroup[2] = parseInt(_ageGroup[2]) + 1
                }
                else if (key > 27 && key <= 32) {
                    _ageGroup[3] = parseInt(_ageGroup[3]) + 1
                }
                else if (key > 32 && key <= 37) {
                    _ageGroup[4] = parseInt(_ageGroup[4]) + 1
                }
                else if (key > 37 && key <= 42) {
                    _ageGroup[5] = parseInt(_ageGroup[5]) + 1
                }
                else if (key > 42) {
                    _ageGroup[6] = parseInt(_ageGroup[6]) + 1
                }

            })
            setAgeGroup(_ageGroup)
            setTopLocationData(_topLocation)
            setTopLocation(Object.keys(_topLocation).sort(function (a, b) { return _topLocation[b] - _topLocation[a] }))
            await setChartData(await bindChartData(_counter))
            await setUserRationByGender(_userRatioByGender)
        }
        fetchStatus();
    }, [])

    const state = {
        labels: ['Under 18', '18 - 22', '23 - 27', '28 - 32', '33 - 37', '38 - 42', 'Over 42'],
        datasets: [
            {
                backgroundColor: '#F3BB23',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 0,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: _ageGroup,
                height: '50px'
            }
        ]
    }

    return (
        <>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12 line-graph-holder">
                <div className="chart-button-holder">
                    <Button >All time</Button>
                    <Button >2020 </Button>
                    <Button >September</Button>
                </div>
                {chartData?.length > 0 &&
                    <Line data={{
                        datasets: [
                            {
                                backgroundColor: "transparent",
                                borderColor: "#0E9BE2",
                                data: chartData,
                            },
                        ],
                    }}
                        options={options} />
                }

            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 bar-graph-holder">
                <h5>Top Locations</h5>
                <ul >
                    {topLocation?.map((value, index) =>
                        <li key={index}> <p>{index + 1}  {value}</p> {topLocationData[value]}</li>
                    )}
                </ul>
                <Link to="">See All Locations</Link>

                <div className="gender-ration">
                    <h5>Gender</h5>
                    <p style={{ color: "#5e6773", fontSize: "13px" }}>
                        <label >Male</label>
                        <label >{numeral((userRationByGender["Male"] / (userRationByGender["Male"] + userRationByGender["Female"])) * 100).format("0.0")}%</label>
                    </p>

                    <ProgressBar now={(userRationByGender["Male"] / (userRationByGender["Male"] + userRationByGender["Female"])) * 100} />

                    <p style={{ color: "#5e6773", fontSize: "13px" }}>
                        <label >Female</label>
                        <label >{numeral((userRationByGender["Female"] / (userRationByGender["Male"] + userRationByGender["Female"])) * 100).format("0.0")}%</label>
                    </p>
                    <ProgressBar now={(userRationByGender["Female"] / (userRationByGender["Male"] + userRationByGender["Female"])) * 100} />

                </div>
                <br />

                <h5>Age Group</h5>
                <HorizontalBar data={{
                    labels: ['Under 18', '18 - 22', '23 - 27', '28 - 32', '33 - 37', '38 - 42', 'Over 42'],
                    datasets: [
                        {
                            backgroundColor: '#F3BB23',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 0,
                            hoverBackgroundColor: '#F3BB23',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: ageGroup,
                            height: '50px'
                        }
                    ]
                }} options={options1} />
            </div>
        </>
    )
}

export default Chart
