import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {ChartPieIcon} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import MobileMenu from './MobileMenuNavbar'
import UseScroll from '@/utils/useScroll'

const products = [
  { name: 'United States of America', description: 'The U.S. is a country of 50 states covering a vast swath of North America', href: '#', icon: ChartPieIcon }
]


export default function Navbar() {
  const scrollPosition = UseScroll()
  return (
    // navbar and dropdown navbar also
    <header className={`bg-white sticky top-0 z-10 duration-200 ${scrollPosition > 50 ? 'shadow' : ''}`}>
      <nav className="mx-auto flex max-w-7xl font-sans items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <svg width="169" height="34" viewBox="0 0 169 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.8275 22.9975C44.2225 24.5725 42.25 25.36 39.91 25.36C37.57 25.36 35.59 24.5725 33.97 22.9975C32.365 21.4075 31.5625 19.45 31.5625 17.125C31.5625 14.8 32.365 12.85 33.97 11.275C35.59 9.685 37.57 8.89 39.91 8.89C42.25 8.89 44.2225 9.685 45.8275 11.275C47.4475 12.85 48.2575 14.8 48.2575 17.125C48.2575 19.45 47.4475 21.4075 45.8275 22.9975ZM37.1425 19.87C37.8775 20.59 38.8 20.95 39.91 20.95C41.02 20.95 41.935 20.59 42.655 19.87C43.39 19.135 43.7575 18.22 43.7575 17.125C43.7575 16.03 43.39 15.1225 42.655 14.4025C41.935 13.6675 41.02 13.3 39.91 13.3C38.8 13.3 37.8775 13.6675 37.1425 14.4025C36.4225 15.1225 36.0625 16.03 36.0625 17.125C36.0625 18.22 36.4225 19.135 37.1425 19.87ZM56.7001 13.75H61.4251L57.6001 24.9775C57.0451 26.6125 56.1826 27.79 55.0126 28.51C53.8426 29.245 52.2976 29.575 50.3776 29.5V25.5625C51.1426 25.5625 51.7276 25.5025 52.1326 25.3825C52.5376 25.2775 52.8601 25.075 53.1001 24.775L48.6001 13.75H53.3251L55.3276 19.7575L56.7001 13.75ZM65.4733 20.7925C65.8333 21.5425 66.5983 21.9175 67.7683 21.9175C68.4583 21.9175 69.0958 21.6775 69.6808 21.1975L72.4033 23.4925C71.2783 24.7075 69.6883 25.315 67.6333 25.315C65.7133 25.315 64.1683 24.76 62.9983 23.65C61.8433 22.525 61.2658 21.115 61.2658 19.42C61.2658 17.71 61.8283 16.285 62.9533 15.145C64.0933 14.005 65.5258 13.435 67.2508 13.435C68.9608 13.435 70.3633 13.9975 71.4583 15.1225C72.5683 16.2325 73.1233 17.635 73.1233 19.33C73.1233 19.825 73.0633 20.3125 72.9433 20.7925H65.4733ZM65.4058 18.115H69.1858C68.9308 17.215 68.3233 16.765 67.3633 16.765C66.3883 16.765 65.7358 17.215 65.4058 18.115ZM84.7506 25.36C83.0406 25.36 81.6156 25.0075 80.4756 24.3025C79.3356 23.5825 78.5706 22.615 78.1806 21.4L82.0281 19.1725C82.5531 20.5075 83.4981 21.175 84.8631 21.175C85.8831 21.175 86.3931 20.905 86.3931 20.365C86.3931 20.215 86.3556 20.08 86.2806 19.96C86.2056 19.84 86.0631 19.735 85.8531 19.645C85.6431 19.555 85.4556 19.4875 85.2906 19.4425C85.1406 19.3825 84.8706 19.3 84.4806 19.195C84.0906 19.09 83.7981 19.0075 83.6031 18.9475C80.4681 18.0025 78.9006 16.315 78.9006 13.885C78.9006 12.445 79.4181 11.2525 80.4531 10.3075C81.5031 9.3625 82.8756 8.89 84.5706 8.89C85.9056 8.89 87.0981 9.205 88.1481 9.835C89.2131 10.465 89.9931 11.3725 90.4881 12.5575L86.7531 14.74C86.3181 13.63 85.5981 13.075 84.5931 13.075C84.2031 13.075 83.9031 13.1575 83.6931 13.3225C83.4981 13.4725 83.4006 13.6675 83.4006 13.9075C83.4006 14.2375 83.5731 14.4925 83.9181 14.6725C84.2781 14.8525 84.9606 15.085 85.9656 15.37C86.7156 15.595 87.3306 15.8125 87.8106 16.0225C88.2906 16.2175 88.7931 16.5025 89.3181 16.8775C89.8431 17.2375 90.2331 17.71 90.4881 18.295C90.7581 18.865 90.8931 19.54 90.8931 20.32C90.8931 21.925 90.3381 23.17 89.2281 24.055C88.1331 24.925 86.6406 25.36 84.7506 25.36ZM99.1126 17.71H96.7501V20.14C96.7501 20.515 96.8401 20.7925 97.0201 20.9725C97.2001 21.1525 97.4626 21.2575 97.8076 21.2875C98.1676 21.3025 98.6026 21.295 99.1126 21.265V25C96.7576 25.33 95.0776 25.1275 94.0726 24.3925C93.0826 23.6575 92.5876 22.315 92.5876 20.365V17.71H91.0126V13.75H92.5876V11.8375L96.7501 10.6V13.75H99.1126V17.71ZM108.149 13.75H112.312V25H108.149V23.9875C107.429 24.8725 106.424 25.315 105.134 25.315C103.619 25.315 102.382 24.7525 101.422 23.6275C100.462 22.5025 99.9817 21.085 99.9817 19.375C99.9817 17.665 100.462 16.2475 101.422 15.1225C102.382 13.9975 103.619 13.435 105.134 13.435C106.424 13.435 107.429 13.8775 108.149 14.7625V13.75ZM104.684 20.8825C105.059 21.2875 105.547 21.49 106.147 21.49C106.747 21.49 107.227 21.2875 107.587 20.8825C107.962 20.4775 108.149 19.975 108.149 19.375C108.149 18.775 107.962 18.2725 107.587 17.8675C107.227 17.4625 106.747 17.26 106.147 17.26C105.547 17.26 105.059 17.4625 104.684 17.8675C104.324 18.2725 104.144 18.775 104.144 19.375C104.144 19.975 104.324 20.4775 104.684 20.8825ZM118.284 15.9325C118.494 15.1675 118.907 14.575 119.522 14.155C120.137 13.735 120.849 13.525 121.659 13.525V18.025C120.759 17.905 119.972 18.085 119.297 18.565C118.622 19.03 118.284 19.78 118.284 20.815V25H114.122V13.75H118.284V15.9325ZM130.533 17.71H128.171V20.14C128.171 20.515 128.261 20.7925 128.441 20.9725C128.621 21.1525 128.883 21.2575 129.228 21.2875C129.588 21.3025 130.023 21.295 130.533 21.265V25C128.178 25.33 126.498 25.1275 125.493 24.3925C124.503 23.6575 124.008 22.315 124.008 20.365V17.71H122.433V13.75H124.008V11.8375L128.171 10.6V13.75H130.533V17.71ZM139.092 13.75H143.255V25H139.092V23.8975C138.402 24.8425 137.397 25.315 136.077 25.315C134.847 25.315 133.857 24.895 133.107 24.055C132.372 23.2 132.005 21.9325 132.005 20.2525V13.75H136.167V19.8025C136.167 20.8075 136.632 21.31 137.562 21.31C138.057 21.31 138.432 21.1525 138.687 20.8375C138.957 20.5225 139.092 20.0875 139.092 19.5325V13.75ZM152.237 13.435C153.752 13.435 154.989 13.9975 155.949 15.1225C156.909 16.2475 157.389 17.665 157.389 19.375C157.389 21.085 156.909 22.5025 155.949 23.6275C154.989 24.7525 153.752 25.315 152.237 25.315C150.947 25.315 149.942 24.8725 149.222 23.9875V29.5H145.059V13.75H149.222V14.7625C149.942 13.8775 150.947 13.435 152.237 13.435ZM149.762 20.8825C150.137 21.2875 150.624 21.49 151.224 21.49C151.824 21.49 152.304 21.2875 152.664 20.8825C153.039 20.4775 153.227 19.975 153.227 19.375C153.227 18.775 153.039 18.2725 152.664 17.8675C152.304 17.4625 151.824 17.26 151.224 17.26C150.624 17.26 150.137 17.4625 149.762 17.8675C149.402 18.2725 149.222 18.775 149.222 19.375C149.222 19.975 149.402 20.4775 149.762 20.8825ZM162.402 17.0575C162.402 17.2375 162.537 17.38 162.807 17.485C163.092 17.59 163.445 17.6725 163.865 17.7325C164.285 17.7775 164.735 17.875 165.215 18.025C165.695 18.175 166.145 18.3625 166.565 18.5875C166.985 18.8125 167.33 19.1725 167.6 19.6675C167.885 20.1475 168.027 20.7325 168.027 21.4225C168.027 22.1425 167.862 22.7725 167.532 23.3125C167.217 23.8525 166.797 24.2575 166.272 24.5275C165.747 24.7975 165.207 24.9925 164.652 25.1125C164.112 25.2475 163.55 25.315 162.965 25.315C160.25 25.315 158.495 24.4225 157.7 22.6375L161.322 21.0175C161.607 21.7825 162.14 22.165 162.92 22.165C163.43 22.165 163.685 22 163.685 21.67C163.685 21.475 163.497 21.3175 163.122 21.1975C162.747 21.0775 162.297 20.9575 161.772 20.8375C161.247 20.7025 160.715 20.53 160.175 20.32C159.65 20.095 159.2 19.7275 158.825 19.2175C158.45 18.7075 158.262 18.07 158.262 17.305C158.262 16.075 158.727 15.1225 159.657 14.4475C160.602 13.7725 161.69 13.435 162.92 13.435C165.38 13.435 167.007 14.3875 167.802 16.2925L164.36 17.53C164.09 16.9 163.67 16.585 163.1 16.585C162.635 16.585 162.402 16.7425 162.402 17.0575Z" fill="#03003D" />
            <rect x="12" y="5" width="12" height="12" fill="#D9D9D9" />
            <rect y="17" width="12" height="12" fill="#0744C3" />
          </svg>

        </div>
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-base font-sans tracking-wide leading-6 text-[#747b88]">
              Explore
              <ChevronDownIcon className="h-5 w-5 flex-none text-[#747b88]" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-base font-sans leading-6 text-[#747b88] tracking-wide">
            Interviews
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-base tracking-wide font-sans leading-6 text-[#747b88]">
              Visas
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-base font-sans tracking-wide leading-6 text-[#747b88]">
              Tools
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -right-4 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#" className="text-base tracking-wide font-sans leading-6 text-[#747b88]">
            Checklists
          </a>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-base font-sans tracking-wide leading-6 text-[#747b88]">
              More
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -right-4 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-500">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  )
}
