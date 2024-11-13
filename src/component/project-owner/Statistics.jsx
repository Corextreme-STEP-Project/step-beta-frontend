import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// Circular progress component
const CircularProgress = ({ name, value, max }) => {
    const strokeDasharray = 100;
    const strokeDashoffset = strokeDasharray - (value / max) * strokeDasharray;

    return (
        <div className="relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                    className="text-gray-100"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="text-blue-400"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute flex flex-col items-center text-center">
                <span className="text-1xl text-gray-500 font-medium">
                    {name.split(' ').map((word, index) => (
                        <span key={index}>
                            {word}
                            {index === 0 && <br />}
                        </span>
                    ))}
                </span>
                <span className="text-black text-5xl font-semibold">{`${value}%`}</span>
            </div>
        </div>
    );
};

const Statistics = () => {
    const performanceIndicators = [
        { name: 'Taux de présence des vacataires', value: 43, trend: 'up', link: '/projects' },
    ];
    const data = [
        { name: 'January', projects: 65 },
        { name: 'February', projects: 59 },
        { name: 'March', projects: 80 },
        { name: 'April', projects: 81 },
        { name: 'May', projects: 56 },
        { name: 'June', projects: 55 },
        { name: 'July', projects: 40 },
        { name: 'August', projects: 60 },
        { name: 'September', projects: 70 },
        { name: 'October', projects: 80 },
        { name: 'November', projects: 90 },
        { name: 'December', projects: 100 },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded shadow">

                {/* Performance Indicators Section */}
                <section className="h-full">
                    <div className="flex flex-row justify-center items-center h-full w-full">
                        {performanceIndicators.map((indicator, index) => (
                            <Link
                                key={index}
                                to={indicator.link}
                                className="flex flex-col items-center justify-center bg-white h-full w-full"
                            >
                                <CircularProgress name={indicator.name} value={indicator.value} max={100} />
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold">Projects Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="projects" fill="rgba(75,192,192,0.6)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;