import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import CategoryIcon from '@material-ui/icons/Category';
import SchoolIcon from '@material-ui/icons/School';
import SubjectIcon from '@material-ui/icons/Subject';
import { useRouter } from 'next/router';

const modelsList = [
  {
    modelName: 'User',
    icon: AccountCircleIcon,
  },{
    modelName: 'City',
    icon: LocationCityIcon,
  },{
    modelName: 'Faq',
    icon: QuestionAnswerIcon,
  },{
    modelName: 'Program',
    icon: CategoryIcon,
  },{
    modelName: 'School',
    icon: SchoolIcon,
  },{
    modelName: 'Student',
    icon: PersonIcon,
  },{
    modelName: 'Subject',
    icon: SubjectIcon,
  },{
    modelName: 'Teacher',
    icon: PersonIcon,
  },
];

export const MainListItems: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <ListItem button onClick={() => router.push('/admin')}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      {modelsList.map((item)=>(
        <ListItem
          key={item.modelName}
          button
          onClick={() => router.push(`/admin/models/${item.modelName}`)}
        >
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.modelName} />
        </ListItem>
      ))}
    </div>
  );
};
