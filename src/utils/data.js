// Home Hero Data
import imgOne from "../assets/sunriseHero.webp";

import one from "../assets/home/sunriseacademyone.webp";
import two from "../assets/home/sunriseacademytwo.webp";
import three from "../assets/home/sunriseacademythree.webp";
import four from "../assets/home/sunriseacademyfour.webp";
import five from "../assets/home/sunriseacademysix.webp";
import six from "../assets/home/sunriseacademyfive.webp";

export const HeroData = [
    {
        Heading: "Welcome to Sunrise School",
        subHeading: "Empowering Minds, Shaping Futures",
        img: one,
        id: 1,
        button: 'Admission',
        link: '/admission'
    },
    {
        Heading: "Learn, Grow, Shine",
        subHeading: "Inspiring Excellence Every Day",
        img: imgOne,
        id: 2,
        button: 'Contact Us',
        link: '/contact'
    }
]


// Team Data
export const teamData = [
  {
    role: "Manager",
    name: "Mr. Rahul Sharma",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/man-illustration-svg-png-download-2790260.png",
    description:
      "At Sunrise Academy, the Manager ensures smooth operations, strategic planning, and effective execution of school policies, working closely with staff and parents to create a supportive environment.",
  },
  {
    role: "Principal",
    name: "Ms. Anjali Singh",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT399OHvkEl1ZwjoAEipdBNI5AkgvV7U0k-Dg&s",
    description:
      "At Sunrise Academy, we believe in the potential that exists in each individual and that it can be nurtured through the right guidance and encouragement. As the Principal, I feel honored and privileged to lead this institution.",
  },
  {
    role: "Administrative",
    name: "Mr. Suresh Kumar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnu7h2Fm5q_AMCP53tDYvb9_Xn85mCxTGpJ8wOAX5KJ2G3aFiF8Tm31MpDieRBJMI-M4&usqp=CAU",
    description:
      "The Administrative team at Sunrise Academy focuses on efficient management of resources, ensuring that academic and extracurricular activities are well-supported and aligned with our vision of excellence.",
  },
  {
    role: "Coordinator",
    name: "Mrs. Pooja Verma",
    image:
      "https://www.shutterstock.com/image-vector/man-vector-portrait-male-person-260nw-2336326589.jpg",
    description:
      "As Coordinator, I work to bridge communication between teachers, students, and parents, ensuring smooth academic progress and maintaining harmony in the school environment.",
  },
];

// pg-4


export const galleryData = [
  { id: 1, image: one, title: "Sunrise Academy Building & Flag" },
  { id: 2, image: two, title: "Independence Day Parade" },
  { id: 3, image: three, title: "Teacher Guiding Students" },
  { id: 4, image: four, title: "Janmashtami Celebration" },
  { id: 5, image: five, title: "Parent-Teacher Meeting" },
  { id: 6, image: six, title: "Cultural Event Celebration" },
];


export 
  const faqs = [
  {
    q: "Which board is the school affiliated to?",
    a: "Sunrise Academy is affiliated to CBSE. We follow the latest CBSE curriculum across all grades.",
  },
//   {
//     q: "What documents are required for admission?",
//     a: "Birth certificate, previous school’s transfer certificate (if applicable), Aadhaar (student + parents), passport-size photographs, and previous class report card.",
//   },
//   {
//     q: "Is there school transport available?",
//     a: "Yes. Buses cover major routes in the city. Exact routes and fees are shared during admission.",
//   },
  {
    q: "How can parents communicate with teachers?",
    a: "Parents can use the school app/portal, PTMs scheduled every term, or request an appointment via the front office.",
  },
  {
    q: "How does the school ensure student safety?",
    a: "CCTV-monitored campus, verified staff, separate infirmary, trained security, and regular safety drills.",
  },
  {
    q: "What is the fee payment process?",
    a: "Fees can be paid quarterly via online portal, UPI, card, or at the school accounts office within the notified schedule.",
  },
];