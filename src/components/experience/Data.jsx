import osd from '../../assets/osd.jpg';
import Experience3 from '../../assets/3.png';
import anitaB from '../../assets/anitaB.jpg';
import gfd from '../../assets/gfd.jpg';
import git from '../../assets/git.jpg';
import sff from '../../assets/sff.jpg';
import pg from '../../assets/pg.png';
import zerone from '../../assets/zerone.png';
import weCode from '../../assets/weCode.png';
import tu from '../../assets/tu.png';
import hmv from '../../assets/hmv.png';
import swarnim from '../../assets/swarnim.png';
import kmc from '../../assets/kmc.jpg';
import codeRush from '../../assets/codeRush.png';



export const experienceData = [
    {
        image: pg,
        title: 'Technical Manager',
        company: 'Pulchowk Girls',
        date: 'Sep 2020 - Present',
        description: (
            <ul className='ul'>
                <li>Manage technical aspects and design posters of the events.</li>
            </ul>),
    },
    {
        image: Experience3,
        title: 'Instructor',
        company: 'Workshops & Traning Programs',
        date: '',
        description: (
            <ul className='ul'>
                <li><b>Version Control System with Git&emsp;</b>
                |&emsp;<button>Jul 12 - Jul 15, 2022</button><br />
                Instructed students on git and version control in a 4-day workshop organized by IT Club, Pulchowk.</li>
                <li><b>Microsoft Bootcamp Trainer, Girls in Tech–Nepal&emsp;</b>
                |&emsp;<button>Apr - Jun, 2022</button><br />
                Instructor for Microsoft Office training given to students of Center for Disabled Children Assistance (CDCA), Dhanyawaad, and Tara Namaste Orphanage.</li>
            </ul>),
    },
    {
        image: osd,
        title: 'Open Source Day Mentor, Participant',
        company: 'AnitaB.org',
        date: 'Jul 2021 | Sep 16, 2022',
        description: (
            <ul className='ul'>
                <li><b>Open Source Day 2021 (Mentor)&emsp;</b>
                |&emsp;<button>Jul, 2021</button><br />
                Mentored participants on using git, GitHub, setting up the project <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>Awesome Portfolio Websites</a> and helped them make their first open source contributions.</li>
                <li><b>Open Source Day 2022 (GHC Scholar)&emsp;</b>
                |&emsp;<button>Sep 16, 2022</button><br />
                Contributed to <a href='https://github.com/numpy/numpy' target='_blank'>NumPy</a> documentation.</li>
            </ul>),
    },
    
    {
        image: codeRush,
        title: 'Code Like Her Fellowship',
        company: 'Code Rush',
        date: 'Dec 2021 - Mar 2022',
        description: (
            <ul className='ul'>
                <li>Selected as one of the 15 fellows.</li>
                <li>Skills: HTML, CSS, JavaScript, NodeJS, Express, React.js</li>
                <li>Projects: <a href='https://github.com/Coderushnepal/YunikaBajracharya' target='_blank'>Click Here</a></li>
            </ul>),
    },
    {
        image: sff,
        title: 'Seeds for the Future 2021',
        company: 'Huawei',
        date: 'Nov - Dec 2021',
        description: (
            <ul className='ul'>
                <li>Led the team project ‘Tech4Good’ on tracking the insulin dose and glucometer readings for Diabetic patients.</li>
                <li>Learned fundamental courses on 5G, Cloud Computing, and AI</li>
                <li> Project Details: 
                    <a href='https://sathi-app.github.io/' target='_blank'> Website &#x2B29; </a>
                    <a href='https://www.youtube.com/watch?v=mxnGCWSWLTY&list=PLfEevmzbs5mMKyBsHwh8c73v6xC60i4eX&index=4' target='_blank'> Intro Video &#x2B29; </a>
                    <a href='https://www.youtube.com/watch?v=ij6_imqs3Nc&list=PLfEevmzbs5mMKyBsHwh8c73v6xC60i4eX&index=4' target='_blank'> Demo Video</a>
                </li>
                <li><a href='https://www.youtube.com/watch?v=k4MR0XnlJ_I&list=PLfEevmzbs5mMKyBsHwh8c73v6xC60i4eX&index=1' target='_blank'>Student Representative</a></li>
            </ul>),
    },
];

export const volunteeringData = [
    {
        image: zerone,
        title: 'Editor',
        company: 'The Zerone',
        date: 'Jan 2020 - Present',
        description: (
            <ul className='ul'>
                <li><b>Associate Editor&emsp;</b>
                |&emsp;<button>The Zerone 2021</button><br />
                Led the team for grammar-related social media posts, wrote and edited articles for the magazine.</li>
                <li><b>Editor&emsp;</b>
                |&emsp;<button>The Zerone 2020</button><br />
                Wrote, edited articles, and designed posters for the magazine, writing sessions, and competitions.</li>
            </ul>),
    },
    {
        image: gfd,
        title: 'Communication and Outreach Lead',
        company: 'GitHub Field Day Nepal',
        date: 'Apr - Jun 2022',
        description: (
            <>
            GitHub Field Day is an unconference for leaders of technical student communities. Field day Nepal 2022 brought together 50 student leaders from 12 cities representing 40+ tech communities.
            <br /><br />
            <ul className='ul-small-gap'>
                
                <li>One of the organizers for the first GitHub Field Day Nepal.</li>
                <li>Reached out to 50+ tech communities, media channels and IT colleges across the country.</li>
                <li>Responsible for communication with keynote speaker, campus experts and participants.</li>
                <li>Moderated Group Discussions during the Field Day.</li>
            </ul>
            </>
        ),
    },
    {
        image: git,
        title: 'Outreach Coordinator Ambassador',
        company: 'Girls in Tech-Nepal',
        date: 'Jan 2021 - Present',
        description: (<>
        <ul className='ul-small-gap'>   
            <li>Reached out to speakers for <a href='https://www.youtube.com/watch?v=nKxwriaQxO0&list=PLrC-5k2StDOiqFW3ssT_tnStQG88SYVNW&index=4' target='_blank'>Her Journey</a> series and webinars.</li>
            <li>Moderated webinars and promote GIT-Nepal.</li>
            <li>Trainer for Microsoft Office Bootcamp</li>
        </ul>
        </>),
    },
    {
        image: hmv,
        title: 'Online Women Empowerment Program',
        company: "Hear My Voice - Women's Network",
        date: 'May - Jun 2020',
        description: (
            <ul className='ul'>
                <li>Discussed women's rights and social justice with women across 7 countries for 6 weeks.</li>
                <li>Panelist in Panel Discussion - ‘Stand Up Against Gender-Based Violence’ on 23rd Nov 2020.</li>
            </ul>),
    },
];

export const scholarshipData = [
    {
        image: anitaB,
        title: 'Grace Hopper Celebration Scholar 2022',
        company: 'AnitaB.org',
        date: '',
        description:'',
    },
    {
        image: weCode,
        title: 'Harvard WECode Scholar 2022',
        company: 'Harvard WECode',
        date: '',
        description: '',
    },
];

export const educationData = [
    {
        image: tu,
        title: 'Tribhuvan Universtiy, Pulchowk Campus',
        company: 'Bachelors in Computer Engineering ',
        date: ' | 2019-2024',
        description: '',
    },
    {
        image: kmc,
        title: 'Kathmandu Model Secondary School',
        company: 'Grade 11, 12 ',
        date: ' | 2017-2018',
        description:(
            <ul>
                <li>&#x2B29; President, KMC Art Club 2018-19</li>
                <li>&#x2B29; Winner, KMC Annual Art Competition 2019</li>
            </ul>
        ),
    },
    {
        image: swarnim,
        title: 'Swarnim School',
        company: 'Grade 1-10 ',
        date: ' | Graduated: 2016',
        description: (
            <ul>
                <li>&#x2B29; Head Girl, 22nd Batch</li>
            </ul>
        ),
    },
];
