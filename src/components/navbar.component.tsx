import React, { useState } from 'react';
import CustomBorderBox from './custom-border-box.component';
import { IconChevronDown, IconChevronRight, IconClose, IconMenu } from './icons';
import { Link, useLocation } from 'react-router-dom';
import menuItems from '../config/menu';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [menuHovered, setMenuHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnterMenu = (index: number) => {
    setActiveSubmenu(index);
    setMenuHovered(true);
  };

  const handleMouseLeaveMenu = () => {
    if (!menuHovered) {
      setActiveSubmenu(null);
    }
  };

  const handleMouseLeaveSubmenu = () => {
    setMenuHovered(false);
    setActiveSubmenu(null);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav className="bg-f1-red text-white fixed left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-[10px]">
        <div className="grid grid-flow-col items-center h-[70px] md:justify-center">
          {/* Botão Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 focus:outline-none" aria-label="Toggle menu">
              {mobileMenuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>

          {/* Logo e título */}
          <div className="flex items-center pr-[30px]" onMouseEnter={handleMouseLeaveSubmenu}>
            <img
              className="w-auto h-5 md:h-8"
              src="https://media.formula1.com/image/upload/f_auto,c_limit,w_195,q_auto/etc/designs/fom-website/images/f1_logo"
              alt="Logo"
            />
            <span className="ml-2 font-bold text-lg hidden lg:block">F1 Insights</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block h-full">
            <ul className="flex h-full">
              {menuItems.map((item, index) => {
                const isActive = item.link === '/' ? location.pathname === '/' : location.pathname.startsWith(item.link);

                const isActiveSubmenu = activeSubmenu === index;

                return (
                  <li
                    key={index}
                    className={`relative h-full flex items-center pt-1 px-[10px] group ${isActiveSubmenu ? 'bg-f1-hovers' : ''}`}
                    onMouseEnter={() => handleMouseEnterMenu(index)}
                    onMouseLeave={handleMouseLeaveMenu}
                  >
                    <div
                      className={`border-b border-r rounded-br-lg transition-colors duration-800 ${
                        isActive && !isActiveSubmenu ? 'border-white' : 'border-transparent'
                      }`}
                    >
                      <Link
                        to={item.link}
                        onClick={handleCloseMenu}
                        className="px-1 pt-1 pb-2 flex items-center h-full gap-[6px] font-medium text-xs xl:text-sm"
                      >
                        {item.label}
                        {item.submenu && <IconChevronDown />}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {activeSubmenu !== null && menuItems[activeSubmenu]?.submenu && (
        <div className="absolute left-0 top-16 w-full bg-f1-hovers shadow-md border-b-f1-red border-b-[1px]" onMouseLeave={handleMouseLeaveSubmenu}>
          <div className="max-w-7xl mx-auto px-9">
            <CustomBorderBox borderSides="bottom-right" borderColor="border-f1-grey" margin="my-14" padding="pb-5">
              <ul className="flex space-x-6">
                {menuItems[activeSubmenu].submenu!.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={sub.link}
                      onClick={handleCloseMenu}
                      className="group relative inline-flex items-center transition gap-[6px] font-bold text-white text-sm xl:text-base"
                    >
                      {sub.label}
                      <IconChevronRight />
                      <span
                        className="
                          absolute left-0 -bottom-1 w-full h-[3px] bg-f1-red 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        "
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </CustomBorderBox>
          </div>
        </div>
      )}

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-f1-red absolute w-full">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <CustomBorderBox borderSides="bottom-right" borderColor="border-f1-mobileMenuBorder" padding="py-3 px-2">
                  <Link to={item.link} onClick={handleCloseMenu} className="text-sm transition flex items-center justify-between">
                    {item.label}
                    <IconChevronRight className="w-[16px] h-[16px] text-f1-white" />
                  </Link>
                </CustomBorderBox>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
