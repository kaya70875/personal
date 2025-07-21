import reactIconSVG from "../../public/svg/react.svg";
import typescriptIconSVG from "../../public/svg/ts.svg";
import manifestIconSVG from "../../public/svg/extension.svg";
import pythonIconSVG from "../../public/svg/python.svg";
import nextIconSVG from "../../public/svg/next.svg";
import scssIconSVG from "../../public/svg/scss.svg";
import tailwindIconSVG from "../../public/svg/tailwind.svg";
import mongoIconSVG from "../../public/svg/mongo.svg";
import firebaseIconSVG from "../../public/svg/firebase.svg";
import fastapibaseIconSVG from "../../public/svg/fastapi-1.svg";
import figmaIconSvg from "../../public/svg/figma.svg";
import motionIconSvg from "../../public/svg/motion.svg";
import seleniumIconSvg from "../../public/svg/selenium.svg"
import jestIconSvg from "../../public/svg/jest.svg"
import redisIconSvg from "../../public/svg/redis.svg"

export const SKILLS = [
    {
        name: 'React',
        icon: reactIconSVG,
        category: 'frontend'
    },
    {
        name: 'Typescript',
        icon: typescriptIconSVG,
        category: 'frontend'
    },
    {
        name: 'Next JS',
        icon: nextIconSVG,
        category: 'frontend'
    },
    {
        name: 'Python',
        icon: pythonIconSVG,
        category: 'tools'
    },
    {
        name: 'MongoDB',
        icon: mongoIconSVG,
        category: 'backend'
    },
    {
        name: 'Fast API',
        icon: fastapibaseIconSVG,
        category: 'backend'
    },
    {
        name: 'Redis',
        icon: redisIconSvg,
        category: 'backend'
    },
    {
        name: 'Manifest',
        icon: manifestIconSVG,
        category: 'tools'
    },
    {
        name: 'Tailwind',
        icon: tailwindIconSVG,
        category: 'frontend'
    },
    {
        name: 'SCSS',
        icon: scssIconSVG,
        category: 'frontend'
    },
    {
        name: 'Firebase',
        icon: firebaseIconSVG,
        category: 'backend'
    },
    {
        name: 'Figma',
        icon: figmaIconSvg,
        category: 'tools'
    },
    {
        name: 'Motion',
        icon: motionIconSvg,
        category: 'frontend'
    },
    {
        name: 'Selenium',
        icon: seleniumIconSvg,
        category: 'tools'
    },
    {
        name: 'Jest',
        icon: jestIconSvg,
        category: 'tools'
    }


] as const;