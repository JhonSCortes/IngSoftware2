import { Clock } from "./icons/Clock";
import { SearchNormal } from "./icons/SearchNormal";
import { TickCircle } from "./icons/TickCircle";
import { VuesaxBoldBookSquare1 } from "./icons/VuesaxBoldBookSquare1";
import { VuesaxBoldPause } from "./icons/VuesaxBoldPause";
import { VuesaxLinearBook1 } from "./icons/VuesaxLinearBook1";
import { VuesaxLinearCategory2 } from "./icons/VuesaxLinearCategory2";
import { VuesaxLinearElement1 } from "./icons/VuesaxLinearElement1";
import { VuesaxLinearFolderOpen } from "./icons/VuesaxLinearFolderOpen";
import { VuesaxLinearMaximize3 } from "./icons/VuesaxLinearMaximize3";
import { VuesaxLinearMessage } from "./icons/VuesaxLinearMessage";
import { VuesaxLinearProfile2User } from "./icons/VuesaxLinearProfile2User";
import { VuesaxLinearScreenmirroring } from "./icons/VuesaxLinearScreenmirroring";
import { VuesaxLinearSetting2 } from "./icons/VuesaxLinearSetting2";
import { VuesaxLinearSort } from "./icons/VuesaxLinearSort";
import { VuesaxLinearUserOctagon } from "./icons/VuesaxLinearUserOctagon";
import { VuesaxLinearVolumeHigh } from "./icons/VuesaxLinearVolumeHigh";
import "./style.css";

export const WebDetailTask = (): JSX.Element => {
  return (
    <div className="web-detail-task">
      <div className="div">
        <div className="side-menu">
          <img className="line" alt="Line" src="https://c.animaapp.com/C0vtOxNc/img/line-1.svg" />
          <div className="logo">
            <VuesaxBoldBookSquare1 className="vuesax-bold-book" />
            <div className="text-wrapper">Nuegas</div>
          </div>
          <div className="side-menu-2">
            <div className="div-wrapper">
              <div className="div-2">
                <VuesaxLinearCategory2 className="icon-instance-node" color="#8E92BC" />
                <div className="text-wrapper-2">Overview</div>
              </div>
            </div>
            <div className="course">
              <VuesaxLinearBook1 className="icon-instance-node" color="#141522" />
              <div className="text-wrapper-3">Task</div>
            </div>
            <div className="div-wrapper">
              <div className="div-2">
                <VuesaxLinearUserOctagon className="icon-instance-node" />
                <div className="text-wrapper-2">Mentors</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="div-2">
                <VuesaxLinearMessage className="icon-instance-node" />
                <div className="text-wrapper-2">Message</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="div-2">
                <VuesaxLinearSetting2 className="icon-instance-node" />
                <div className="text-wrapper-2">Settings</div>
              </div>
            </div>
          </div>
          <div className="help-cemter">
            <div className="overlap">
              <div className="overlap-wrapper">
                <div className="overlap-group">
                  <div className="bg" />
                  <div className="bg-2" />
                  <div className="bg-3" />
                  <div className="button-help">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-4">Go To Help Center</div>
                    </div>
                  </div>
                  <div className="help-cemter-2">
                    <div className="text-wrapper-5">Help Center</div>
                    <p className="having-trouble-in">
                      Having Trouble in Learning.
                      <br />
                      Please contact us for more questions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="question">
                <div className="overlap-2">
                  <div className="shadow" />
                  <div className="bg-4" />
                  <div className="text-wrapper-6">?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="header">
          <div className="text-wrapper-7">Detail Task</div>
          <div className="searching">
            <div className="search-course-name">Search&nbsp;&nbsp;Task</div>
            <SearchNormal className="search-normal" />
          </div>
          <div className="action">
            <div className="notif">
              <div className="overlap-group-3">
                <div className="notif-wrapper">
                  <div className="notif-2" />
                </div>
                <div className="bg-5" />
              </div>
            </div>
            <img className="profil" alt="Profil" src="https://c.animaapp.com/C0vtOxNc/img/profil@2x.png" />
          </div>
          <div className="filter-short">
            <div className="div-wrapper-2">
              <div className="div-2">
                <VuesaxLinearElement1 className="icon-instance-node" />
                <div className="text-wrapper-8">Category</div>
              </div>
            </div>
            <div className="div-wrapper-2">
              <div className="div-2">
                <VuesaxLinearSort className="icon-instance-node" />
                <div className="text-wrapper-9">Sort By : Deadline</div>
              </div>
            </div>
          </div>
        </header>
        <div className="detail-task">
          <div className="video-task">
            <div className="video-bar">
              <VuesaxBoldPause className="vuesax-bold-pause" />
              <VuesaxLinearVolumeHigh className="vuesax-linear-volume" />
              <VuesaxLinearScreenmirroring className="vuesax-linear" />
              <VuesaxLinearMaximize3 className="vuesax-linear-maximize-3" />
              <div className="text-wrapper-10">2:20/10:00</div>
              <div className="progress">
                <div className="progress-2" />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="title">Creating Awesome Mobile Apps</div>
            <div className="instructure">
              <div className="mentor">
                <p className="your-job-as-a-UX-des">UI UX Design . Apps Design</p>
                <img className="img" alt="Line" src="https://c.animaapp.com/C0vtOxNc/img/line.svg" />
                <div className="your-job-as-a-UX-des-2">+ Get Mentors</div>
              </div>
            </div>
            <div className="info">
              <div className="info-2">
                <div className="student">
                  <VuesaxLinearProfile2User className="icon-instance-node-2" />
                  <div className="your-job-as-a-UX-des-3">200 Students Involved</div>
                </div>
                <div className="student">
                  <Clock className="icon-instance-node-2" />
                  <div className="your-job-as-a-UX-des-3">1 Hour</div>
                </div>
              </div>
            </div>
          </div>
          <div className="description-task">
            <div className="text-wrapper-11">Description</div>
            <p className="p">
              Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how
              to make a good and correct design. Starting from spacing, typography, content, and many other design
              hierarchies. Then try to make it yourself with your imagination and inspiration.
            </p>
          </div>
          <div className="essence-of">
            <div className="text-wrapper-12">Essence of Assessment</div>
            <div className="div-3">
              <div className="essence-of-2">
                <TickCircle className="icon-instance-node" />
                <p className="text-wrapper-13">Understanding the tools in Figma</p>
              </div>
              <div className="essence-of-2">
                <TickCircle className="icon-instance-node" />
                <p className="text-wrapper-13">Understand the basics of making designs</p>
              </div>
              <div className="essence-of-2">
                <TickCircle className="icon-instance-node" />
                <p className="text-wrapper-13">Designing a mobile application using figma</p>
              </div>
              <div className="essence-of-2">
                <TickCircle className="icon-instance-node" />
                <div className="text-wrapper-13">Presenting the design flow</div>
              </div>
            </div>
          </div>
        </div>
        <div className="assigned-assignments">
          <div className="text-wrapper-14">Assigned Assignments</div>
          <div className="task">
            <div className="title-2">Creating Awesome Mobile Apps</div>
            <p className="your-job-as-a-UX-des-4">UI UX Design . Apps Design</p>
          </div>
          <div className="file-task">
            <div className="text-wrapper-15">File Task</div>
            <div className="div-3">
              <div className="div-4">
                <div className="text-wrapper-16">Last Modified</div>
                <div className="text-wrapper-17">1 July 2022</div>
              </div>
              <div className="file-submisiion">
                <div className="text-wrapper-16">File submissions</div>
                <div className="file-submisiion-2">
                  <div className="vuesax-linear-folder-wrapper">
                    <VuesaxLinearFolderOpen className="vuesax-linear-folder" />
                  </div>
                  <p className="text-wrapper-18">*drag or browser from device</p>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-student">
            <div className="text-wrapper-15">Detail Student</div>
            <div className="div-3">
              <div className="div-4">
                <div className="text-wrapper-16">Student&#39;s name</div>
                <div className="text-wrapper-17">Skylar Dias</div>
              </div>
              <div className="div-4">
                <div className="text-wrapper-16">Student Class</div>
                <div className="text-wrapper-17">MIPA 2</div>
              </div>
              <div className="div-4">
                <div className="text-wrapper-16">Student Number</div>
                <div className="text-wrapper-17">10</div>
              </div>
            </div>
          </div>
          <div className="submit-task">
            <div className="text-wrapper-19">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};
