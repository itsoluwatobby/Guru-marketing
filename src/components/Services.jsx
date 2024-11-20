import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMonitor, FiSmartphone, FiLayout, FiTrendingUp } from 'react-icons/fi';

const services = [
  {
    icon: <FiMonitor size={40} />,
    title: 'Web Design',
    description: 'Create beautiful, responsive websites that engage users and drive conversions.'
  },
  {
    icon: <FiSmartphone size={40} />,
    title: 'Mobile Apps',
    description: 'Develop intuitive mobile applications that provide value to your users.'
  },
  {
    icon: <FiLayout size={40} />,
    title: 'UI/UX Design',
    description: 'Design user-friendly interfaces that create memorable experiences.'
  },
  {
    icon: <FiTrendingUp size={40} />,
    title: 'Digital Marketing',
    description: 'Drive growth through strategic digital marketing campaigns.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-primary mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary max-w-3xl mx-auto"
          >
            We offer comprehensive digital solutions to help your business grow
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-accent mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;