import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ title, value, isPercentage }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const countRef = useRef(null);

  useEffect(() => {
    if (inView && countRef.current) {
      countRef.current.start();
    }
  }, [inView]);

  const endValue = isPercentage ? parseFloat(value) : parseInt(value.replace(',', '').replace('$', ''));

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-amber-700/30"
    >
      <h3 className="text-amber-400 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-white text-3xl font-bold">
        {inView ? (
          <CountUp 
            ref={countRef}
            start={0}
            end={endValue}
            duration={2.5}
            decimals={isPercentage ? 0 : 0}
            suffix={isPercentage ? '%' : value.includes('$') ? '' : value.includes('High') ? '' : ''}
            prefix={value.includes('$') ? '$' : ''}
            formattingFn={(val) => {
              if (value.includes('High')) return 'Record High';
              if (value.includes('$')) return `$${val.toLocaleString()}`;
              return val.toLocaleString() + (isPercentage ? '%' : '');
            }}
          />
        ) : '0'}
      </p>
    </motion.div>
  );
};

const StatsBar = () => {
  return (
    <section className="py-10 bg-gray-900/80">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-amber-400"
        >
          Market Snapshot
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <StatCard title="Gold YTD" value="+23%" isPercentage={true} />
          <StatCard title="Silver YTD" value="+18%" isPercentage={true} />
          <StatCard title="Central Bank Demand" value="Record High" />
          <StatCard title="Goldman Target" value="$5,400" />
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
