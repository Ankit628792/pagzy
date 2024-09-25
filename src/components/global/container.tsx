"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils';

type Props = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    reverse?: boolean;
}

function Container({ children, className, delay, reverse }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: reverse ? -20 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay, duration: 0.4, ease: "easeInOut" }}
            className={cn("w-full h-full", className)}
        >
            {children}
        </motion.div>
    )
}

export default Container