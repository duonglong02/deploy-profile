import './App.css';
import Menu from './Menu/MenuTable';
import Information from './Information/InformationTable';
import Experience from './Experience/ExperienceTable';
import Education from './Education/EducationTable';
import Skill from './Skill/SkillTable';
import Interest from './Interest/InterestTable';
import Certificate from './Certificate/CertificateTable';

function App() {
  return (
    <div>
      <Menu />
      <div className="container-fluid p-0">
        <Information />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skill />
        <hr className="m-0" />
        <Interest />
        <hr className="m-0" />
        <Certificate />
      </div>
    </div>
  );
}

export default App;
