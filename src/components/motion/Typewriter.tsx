import { motion } from "framer-motion";

export const sentenceVariants = {
    hidden: {},
    // change staggerChildren variable to speed up or slow down typing.
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

export const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

interface TypewriterProps {
    text: string;
}

export const Typewriter = ({ text, ...rest }: TypewriterProps) => (
    <motion.p
        key={text}
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        {...rest}
    >
        {text.split("").map((char, i) => (
            <motion.span className="text-text" key={`${char}-${i}`} variants={letterVariants}>
                {char}
            </motion.span>
        ))}
    </motion.p>
);
