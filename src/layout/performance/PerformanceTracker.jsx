import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Card,
  CircularProgress,
  Tooltip,
  IconButton,
  Chip
} from '@mui/material';
import {
  CheckCircle,
  PlayCircle,
  PauseCircle,
  Warning,
  MoreVert,
  Schedule
} from '@mui/icons-material';

const PerformanceTracker = ({ projectId }) => {
  const [milestones] = useState([
    {
      id: 1,
      phase: 'Maturation',
      status: 'completed',
      progress: 100,
      dueDate: '2024-03-15',
      description: 'Project requirements and feasibility assessment',
      owner: 'Jean Michel Ekambe',
      tasks: 12,
      completedTasks: 12,
      health: 'excellent'
    },
    {
      id: 2,
      phase: 'Procurement',
      status: 'in-progress',
      progress: 60,
      dueDate: '2024-04-30',
      description: 'Tender process and vendor selection',
      owner: 'Marie Claire Mutombo',
      tasks: 8,
      completedTasks: 5,
      health: 'good'
    },
    {
      id: 3,
      phase: 'Execution',
      status: 'in-progress',
      progress: 40,
      dueDate: '2024-04-30',
      description: 'Tender process and vendor selection',
      owner: 'Marie Claire Mutombo',
      tasks: 8,
      completedTasks: 5,
      health: 'at-risk'
    },
    {
      id: 4,
      phase: 'Monitoring',
      status: 'in-progress',
      progress: 10,
      dueDate: '2024-04-30',
      description: 'Tender process and vendor selection',
      owner: 'Marie Jean Mutombo',
      tasks: 11,
      completedTasks: 6,
      health: 'at-risk'
    },
    

  ]);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const phases = Array.from(new Set(milestones.map(milestone => milestone.phase)));

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-emerald-500 h-6 w-6" />;
      case 'in-progress':
        return <PlayCircle className="text-blue-500 h-6 w-6" />;
      case 'at-risk':
        return <Warning className="text-amber-500 h-6 w-6" />;
      case 'pending':
        return <PauseCircle className="text-gray-400 h-6 w-6" />;
      default:
        return null;
    }
  };

  const getHealthColor = (health) => {
    switch (health) {
      case 'excellent': return 'bg-emerald-100 text-emerald-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'at-risk': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Project Milestones</h2>
        <div className="flex gap-2">
          <Chip
            icon={<Schedule className="text-blue-500" />}
            label="Timeline View"
            className="bg-blue-50 text-blue-700"
          />
        </div>
      </div>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Milestone phases"
        variant="scrollable"
        scrollButtons="auto"
      >
        {phases.map((phase, index) => (
          <Tab label={phase} key={index} />
        ))}
      </Tabs>

      <div className="grid gap-6">
        {milestones
          .filter(milestone => milestone.phase === phases[selectedTab])
          .map((milestone) => (
            <Card key={milestone.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {getStatusIcon(milestone.status)}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {milestone.phase}
                    </h3>
                    <p className="text-gray-600 mt-1">{milestone.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Tooltip title="More options">
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="relative inline-flex">
                    <CircularProgress
                      variant="determinate"
                      value={milestone.progress}
                      size={60}
                      thickness={4}
                      className="text-blue-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-medium">{milestone.progress}%</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium">
                      {milestone.completedTasks}/{milestone.tasks} Tasks
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-sm text-gray-600">Owner</span>
                  <span className="text-sm font-medium">{milestone.owner}</span>
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-sm text-gray-600">Due Date</span>
                  <span className="text-sm font-medium">{milestone.dueDate}</span>
                </div>

                <div className="flex flex-col justify-center items-end">
                  <span className="text-sm text-gray-600">Health</span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${getHealthColor(milestone.health)}`}>
                    {milestone.health.charAt(0).toUpperCase() + milestone.health.slice(1)}
                  </span>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default PerformanceTracker;
