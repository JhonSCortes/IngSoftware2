import resets from '../_resets.module.css';
import { ArrowDown_Property1Linear } from './Icons/ArrowDown_Property1Linear/ArrowDown_Property1Linear.js';
import { ArrowLeft_Property1Linear } from './Icons/ArrowLeft_Property1Linear/ArrowLeft_Property1Linear.js';
import { ArrowRight_Property1Linear } from './Icons/ArrowRight_Property1Linear/ArrowRight_Property1Linear.js';
import { Bg1Icon } from './Icons/Bg1Icon.js';
import { Bg2Icon } from './Icons/Bg2Icon.js';
import { CartIcon } from './Icons/CartIcon.js';
import { ChartIcon } from './Icons/ChartIcon.js';
import { IconlyLightNotification } from './Icons/IconlyLightNotification/IconlyLightNotification.js';
import { IconlyLightTimeCircle } from './Icons/IconlyLightTimeCircle/IconlyLightTimeCircle.js';
import { InfoIcon } from './Icons/InfoIcon.js';
import { NotificationIcon } from './Icons/NotificationIcon.js';
import { NotifIcon } from './Icons/NotifIcon.js';
import { Polygon2Icon } from './Icons/Polygon2Icon.js';
import { ProgressIcon2 } from './Icons/ProgressIcon2.js';
import { ProgressIcon3 } from './Icons/ProgressIcon3.js';
import { ProgressIcon } from './Icons/ProgressIcon.js';
import { Star1Icon2 } from './Icons/Star1Icon2.js';
import { Star1Icon } from './Icons/Star1Icon.js';
import { TimeCircleIcon2 } from './Icons/TimeCircleIcon2.js';
import { TimeCircleIcon3 } from './Icons/TimeCircleIcon3.js';
import { TimeCircleIcon } from './Icons/TimeCircleIcon.js';
import { VuesaxBoldBookSquare } from './Icons/VuesaxBoldBookSquare/VuesaxBoldBookSquare.js';
import { VuesaxLinearArrowDownIcon } from './Icons/VuesaxLinearArrowDownIcon.js';
import { VuesaxLinearArrowLeftIcon2 } from './Icons/VuesaxLinearArrowLeftIcon2.js';
import { VuesaxLinearArrowLeftIcon3 } from './Icons/VuesaxLinearArrowLeftIcon3.js';
import { VuesaxLinearArrowLeftIcon } from './Icons/VuesaxLinearArrowLeftIcon.js';
import { VuesaxLinearArrowRightIcon2 } from './Icons/VuesaxLinearArrowRightIcon2.js';
import { VuesaxLinearArrowRightIcon3 } from './Icons/VuesaxLinearArrowRightIcon3.js';
import { VuesaxLinearArrowRightIcon } from './Icons/VuesaxLinearArrowRightIcon.js';
import { VuesaxLinearBook } from './Icons/VuesaxLinearBook/VuesaxLinearBook.js';
import { VuesaxLinearCategory2 } from './Icons/VuesaxLinearCategory2/VuesaxLinearCategory2.js';
import { VuesaxLinearMessage } from './Icons/VuesaxLinearMessage/VuesaxLinearMessage.js';
import { VuesaxLinearMore } from './Icons/VuesaxLinearMore/VuesaxLinearMore.js';
import { VuesaxLinearNote2 } from './Icons/VuesaxLinearNote2/VuesaxLinearNote2.js';
import { VuesaxLinearSetting2 } from './Icons/VuesaxLinearSetting2/VuesaxLinearSetting2.js';
import { VuesaxLinearUserOctagon } from './Icons/VuesaxLinearUserOctagon/VuesaxLinearUserOctagon.js';
import classes from './WebDashboard.module.css';

export const WebDashboard = (): JSX.Element => {
    return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
        <div className={classes.sideMenu}>
        <div className={classes.line}></div>
        <div className={classes.logo}>
            <VuesaxBoldBookSquare />
            <div className={classes.nuegas}>Nuegas</div>
        </div>
        <div className={classes.sideMenu2}>
            <div className={classes.overview}>
            <div className={classes.overview2}>
                <VuesaxLinearCategory2 />
                <div className={classes.overview3}>Overview</div>
            </div>
            </div>
            <div className={classes.course}>
            <VuesaxLinearBook />
            <div className={classes.task}>Task</div>
            </div>
            <div className={classes.mentors}>
            <div className={classes.mentors2}>
                <VuesaxLinearUserOctagon />
                <div className={classes.mentors3}>Mentors</div>
            </div>
            </div>
            <div className={classes.mentors4}>
            <div className={classes.mentors5}>
                <VuesaxLinearMessage />
                <div className={classes.message}>Message</div>
            </div>
            </div>
            <div className={classes.settings}>
            <div className={classes.settings2}>
                <VuesaxLinearSetting2 />
                <div className={classes.settings3}>Settings</div>
            </div>
            </div>
        </div>
        <div className={classes.helpCemter}>
            <div className={classes.bg}></div>
            <div className={classes.bg1}>
            <Bg1Icon className={classes.icon12} />
            </div>
            <div className={classes.bg2}>
            <Bg2Icon className={classes.icon13} />
            </div>
            <div className={classes.bg3}></div>
            <div className={classes.goToHelpCenter}>Go To Help Center</div>
            <div className={classes.helpCenter}>Help Center</div>
            <div className={classes.havingTroubleInLearningPleaseC}>
            <div className={classes.textBlock}>Having Trouble in Learning.</div>
            <div className={classes.textBlock2}>Please contact us for more questions.</div>
            </div>
        </div>
        <div className={classes.shadow}></div>
        <div className={classes.bg4}></div>
        <div className={classes.unnamed}>?</div>
        </div>
        <div className={classes.hi}>
        <div className={classes.hiSkylarDias}>Hi, Skylar Dias</div>
        <div className={classes.letSFinishYourTaskToday}>Let&#39;s finish your task today!</div>
        </div>
        <div className={classes.bg5}></div>
        <div className={classes.action}>
        <div className={classes.notif}>
            <div className={classes.notif2}>
            <IconlyLightNotification
                swap={{
                notification: <NotificationIcon className={classes.icon} />,
                }}
            />
            <div className={classes.notif3}>
                <NotifIcon className={classes.icon14} />
            </div>
            </div>
            <div className={classes.bg6}></div>
        </div>
        <div className={classes.profil}></div>
        </div>
        <div className={classes.patient}>
        <div className={classes._65}>65</div>
        <div className={classes.title}>
            <div className={classes.runningTask}>Running Task</div>
        </div>
        <div className={classes.chart}>
            <ChartIcon className={classes.icon15} />
        </div>
        <div className={classes._45}>45%</div>
        <div className={classes.course2}>
            <div className={classes._92980}>100</div>
            <div className={classes.cases}>Task</div>
        </div>
        </div>
        <div className={classes.activity}>
        <div className={classes.time}>
            <div className={classes.thisWeek}>This Week</div>
            <ArrowDown_Property1Linear
            className={classes.arrowDown}
            classes={{ vuesaxLinearArrowDown: classes.vuesaxLinearArrowDown }}
            swap={{
                vuesaxLinearArrowDown: (
                <div className={classes.vuesaxLinearArrowDown}>
                    <VuesaxLinearArrowDownIcon className={classes.icon2} />
                </div>
                ),
            }}
            />
        </div>
        <div className={classes.title2}>
            <div className={classes.activity2}>Activity</div>
        </div>
        <div className={classes.activity3}>
            <div className={classes.task2}>
            <div className={classes._3}>3</div>
            <div className={classes._2}>2</div>
            <div className={classes._1}>1</div>
            </div>
            <div className={classes.day}>
            <div className={classes.sunday}>
                <div className={classes.line1}></div>
                <div className={classes.s}>S</div>
            </div>
            <div className={classes.monday}>
                <div className={classes.line2}></div>
                <div className={classes.m}>M</div>
            </div>
            <div className={classes.tuesday}>
                <div className={classes.line3}></div>
                <div className={classes.t}>T</div>
            </div>
            <div className={classes.wednesday}>
                <div className={classes.line4}></div>
                <div className={classes.w}>W</div>
            </div>
            <div className={classes.thursday}>
                <div className={classes.line5}></div>
                <div className={classes.t2}>T</div>
            </div>
            <div className={classes.friday}>
                <div className={classes.line6}></div>
                <div className={classes.f}>F</div>
            </div>
            <div className={classes.saturday}>
                <div className={classes.line7}></div>
                <div className={classes.s2}>S</div>
            </div>
            </div>
            <div className={classes.cart}>
                <CartIcon className={classes.icon16} />
            </div>
        </div>
        <div className={classes.info}>
            <InfoIcon className={classes.icon17} />
        </div>
        <div className={classes.polygon2}>
            <Polygon2Icon className={classes.icon18} />
        </div>
        <div className={classes.popup}>
            <div className={classes._2Task}>2 Task</div>
        </div>
        </div>
        <div className={classes.monthlyMentors}>
        <div className={classes.mentor}>
            <div className={classes.title3}>Monthly Mentors</div>
            <div className={classes.prevNext}>
            <ArrowLeft_Property1Linear
                swap={{
                vuesaxLinearArrowLeft: <VuesaxLinearArrowLeftIcon className={classes.icon3} />,
                }}
            />
            <ArrowRight_Property1Linear
                swap={{
                vuesaxLinearArrowRight: <VuesaxLinearArrowRightIcon className={classes.icon4} />,
                }}
            />
            </div>
        </div>
        <div className={classes.mentors6}>
            <div className={classes.mentor1}>
            <div className={classes.profile}>
                <div className={classes.photo}></div>
                <div className={classes.name}>
                <div className={classes.title4}>Curious George</div>
                <div className={classes.yourJobAsAUXDes}>UI UX Design</div>
                </div>
            </div>
            <div className={classes.follow}>+ Follow </div>
            <div className={classes.course3}>
                <VuesaxLinearNote2 />
                <div className={classes.yourJobAsAUXDes2}>40 Task</div>
            </div>
            <div className={classes.reviews}>
                <div className={classes.star1}>
                <Star1Icon className={classes.icon19} />
                </div>
                <div className={classes.yourJobAsAUXDes3}>4,7 (750 Reviews)</div>
            </div>
            </div>
            <div className={classes.mentor2}>
            <div className={classes.profile2}>
                <div className={classes.photo2}></div>
                <div className={classes.name2}>
                <div className={classes.title5}>Abraham Lincoln</div>
                <div className={classes.yourJobAsAUXDes4}>3D Design</div>
                </div>
            </div>
            <div className={classes.follow2}>Followed</div>
            <div className={classes.course4}>
                <VuesaxLinearNote2 />
                <div className={classes.yourJobAsAUXDes5}>32 Task</div>
            </div>
            <div className={classes.reviews2}>
                <div className={classes.star12}>
                <Star1Icon2 className={classes.icon20} />
                </div>
                <div className={classes.yourJobAsAUXDes6}>4,9 (510 Reviews)</div>
            </div>
            </div>
        </div>
        </div>
        <div className={classes.upcomingTasks}>
        <div className={classes.upcomingTask}>
            <div className={classes.title6}>Upcoming Task</div>
            <div className={classes.prevNext2}>
            <ArrowLeft_Property1Linear
                swap={{
                vuesaxLinearArrowLeft: <VuesaxLinearArrowLeftIcon2 className={classes.icon5} />,
                }}
            />
            <ArrowRight_Property1Linear
                swap={{
                vuesaxLinearArrowRight: <VuesaxLinearArrowRightIcon2 className={classes.icon6} />,
                }}
            />
            </div>
        </div>
        <div className={classes.task3}>
            <div className={classes.task1}>
            <div className={classes.image}></div>
            <div className={classes.name3}>
                <div className={classes.title7}>Creating Mobile App Design</div>
                <div className={classes.yourJobAsAUXDes7}>UI UX Design</div>
            </div>
            <div className={classes.progress}>
                <div className={classes.progress2}>
                <div className={classes.progress3}>Progress</div>
                <div className={classes._75}>75%</div>
                </div>
                <div className={classes.progress4}>
                <ProgressIcon className={classes.icon21} />
                </div>
            </div>
            <div className={classes.deadline}>
                <IconlyLightTimeCircle
                swap={{
                    timeCircle: <TimeCircleIcon className={classes.icon7} />,
                }}
                />
                <div className={classes._3DaysLeft}>3 Days Left</div>
            </div>
            <div className={classes.student}>
                <div className={classes.photo1}></div>
                <div className={classes.photo22}></div>
                <div className={classes.photo3}></div>
                <div className={classes.photo4}></div>
                <div className={classes.photo5}></div>
            </div>
            </div>
            <div className={classes.task22}>
            <div className={classes.image2}></div>
            <div className={classes.name4}>
                <div className={classes.title8}>Creating Perfect Website</div>
                <div className={classes.yourJobAsAUXDes8}>Web Developer</div>
            </div>
            <div className={classes.progress5}>
                <div className={classes.progress6}>
                <div className={classes.progress7}>Progress</div>
                <div className={classes._85}>85%</div>
                </div>
                <div className={classes.progress8}>
                <ProgressIcon2 className={classes.icon22} />
                </div>
            </div>
            <div className={classes.deadline2}>
                <IconlyLightTimeCircle
                swap={{
                    timeCircle: <TimeCircleIcon2 className={classes.icon8} />,
                }}
                />
                <div className={classes._4DaysLeft}>4 Days Left</div>
            </div>
            <div className={classes.student2}>
                <div className={classes.photo32}></div>
                <div className={classes.photo12}></div>
                <div className={classes.photo52}></div>
                <div className={classes.photo23}></div>
                <div className={classes.photo42}></div>
            </div>
            </div>
        </div>
        </div>
        <div className={classes.calender}>
        <div className={classes.month}>
            <ArrowLeft_Property1Linear
            className={classes.arrowLeft}
            classes={{ vuesaxLinearArrowLeft: classes.vuesaxLinearArrowLeft }}
            swap={{
                vuesaxLinearArrowLeft: (
                <div className={classes.vuesaxLinearArrowLeft}>
                    <VuesaxLinearArrowLeftIcon3 className={classes.icon9} />
                </div>
                ),
            }}
            />
            <div className={classes.july2022}>July 2022</div>
            <ArrowRight_Property1Linear
            className={classes.arrowRight}
            classes={{ vuesaxLinearArrowRight: classes.vuesaxLinearArrowRight }}
            swap={{
                vuesaxLinearArrowRight: (
                <div className={classes.vuesaxLinearArrowRight}>
                    <VuesaxLinearArrowRightIcon3 className={classes.icon10} />
                </div>
                ),
            }}
            />
        </div>
        <div className={classes.bG}></div>
        <div className={classes.date}>
            <div className={classes.date2}>
            <div className={classes.s3}>S</div>
            <div className={classes.no}>
                <div className={classes._10}>10</div>
            </div>
            </div>
            <div className={classes.date3}>
            <div className={classes.m2}>M</div>
            <div className={classes.no2}>
                <div className={classes._11}>11</div>
            </div>
            </div>
            <div className={classes.date4}>
            <div className={classes.t3}>T</div>
            <div className={classes.no3}>
                <div className={classes._12}>12</div>
            </div>
            </div>
            <div className={classes.date5}>
            <div className={classes.w2}>W</div>
            <div className={classes.no4}>
                <div className={classes._13}>13</div>
            </div>
            </div>
            <div className={classes.date6}>
            <div className={classes.t4}>T</div>
            <div className={classes.no5}>
                <div className={classes._14}>14</div>
            </div>
            </div>
            <div className={classes.date7}>
            <div className={classes.f2}>F</div>
            <div className={classes.no6}>
                <div className={classes._15}>15</div>
            </div>
            </div>
            <div className={classes.date8}>
            <div className={classes.s4}>S</div>
            <div className={classes.no7}>
                <div className={classes._16}>16</div>
            </div>
            </div>
        </div>
        </div>
        <div className={classes.taskToday}>
        <div className={classes.taskToday2}>
            <div className={classes.taskToday3}>Task Today</div>
            <VuesaxLinearMore />
        </div>
        <div className={classes.image3}></div>
        <div className={classes.name5}>
            <div className={classes.title9}>Creating Awesome Mobile Apps</div>
            <div className={classes.yourJobAsAUXDes9}>UI /UX Designer</div>
        </div>
        <div className={classes.name6}>
            <div className={classes.title10}>Detail Task</div>
            <div className={classes.yourJobAsAUXDes10}>UI / UX Designer</div>
        </div>
        <div className={classes.progress9}>
            <div className={classes.progress10}>
            <div className={classes.progress11}>Progress</div>
            <div className={classes._90}>90%</div>
            </div>
            <div className={classes.progress12}>
            <ProgressIcon3 className={classes.icon23} />
            </div>
        </div>
        <div className={classes.line8}></div>
        <div className={classes.deadline3}>
            <IconlyLightTimeCircle
            swap={{
                timeCircle: <TimeCircleIcon3 className={classes.icon11} />,
            }}
            />
            <div className={classes._1Hour}>1 Hour</div>
        </div>
        <div className={classes.student3}>
            <div className={classes.photo43}></div>
            <div className={classes.photo24}></div>
            <div className={classes.photo13}></div>
            <div className={classes.photo53}></div>
            <div className={classes.photo33}></div>
        </div>
        <button className={classes.buttonDetail}>
            <div className={classes.goToDetail}>Go To Detail</div>
        </button>
        <div className={classes.homePage}>
            <div className={classes.no8}>
            <div className={classes._17}>1</div>
            </div>
            <div className={classes.homePage2}>
            <div className={classes.understandingTheToolsInFigma}>Understanding the tools in Figma</div>
            </div>
        </div>
        <div className={classes.detailPage}>
            <div className={classes.no9}>
            <div className={classes._22}>2</div>
            </div>
            <div className={classes.detailPage2}>
            <div className={classes.understandTheBasicsOfMakingDes}>Understand the basics of making designs</div>
            </div>
        </div>
        <div className={classes.payment}>
            <div className={classes.no10}>
            <div className={classes._32}>3</div>
            </div>
            <div className={classes.payment2}>
            <div className={classes.designAMobileApplicationWithFi}>Design a mobile application with figma</div>
            </div>
        </div>
        </div>
    </div>
    );
};

