import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiFacebook } from 'react-icons/fi';
import { NavLink } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { title: 'หน้าแรก', to: '/' },
    { title: 'เกี่ยวกับ', to: '/about' },
    { title: 'ผลงาน', to: '/projects' },
    { title: 'ติดต่อ', to: '/contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Robinz27', label: 'GitHub' },
    { icon: FiMail, href: 'https://mimoza27zx@gmail.com', label: 'Email' },
    { icon: FiFacebook, href: 'https://www.instagram.com/aden_7274?igsh=MWxsdzRmOGxwOHJqOA==', label: 'Facebook' },
  ];

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Robinz
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              เว็บไซต์ที่จัดทำเพื่อแสดงผลงาน และเป็นที่รวมของผลงานที่ผมได้ทำไว้ในสำหรับแสดงผลงานต่างๆ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">เมนูลัด</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `
                      text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors
                      ${isActive ? 'text-indigo-600 dark:text-indigo-400' : ''}
                    `}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">ติดต่อ</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                อีเมล: mimoza27zx@email.com<br />
                โทร: 098-359-8801<br />
                ที่อยู่: กรุงเทพมหานคร, ประเทศไทย
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-neutral-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Robinz. All rights reserved.
            <br/>
            Template Made by: <NavLink to={'https://github.com/NekoSakuraLucia/Web-Portfolio-React'} target='_blank' rel="noopener noreferrer" className="underline underline-offset-2 decoration-blue-500">NekoSakuraLucia 💖</NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
