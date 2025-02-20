"use client"
import { motion } from 'framer-motion'

const PageHeading = ({ data }: { data: pageHeadingType }) => {
    return (
        <div><motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">{data.title}</h1>
            <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
                {data.description}
            </p>
        </motion.div></div>
    )
}

export default PageHeading