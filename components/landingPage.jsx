import { Fragment } from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import food_features from "../public/features.png"
import WaitingList from "./waitingList"
import logo_and_icon from '../public/logo_and_icons.png'
import { Popover, Transition } from '@headlessui/react'
import {
  SearchIcon,
  LocationMarkerIcon,
  LightBulbIcon,
  MenuIcon,
  ScaleIcon,
  ShoppingCartIcon,
  TagIcon,
  XIcon,
} from '@heroicons/react/outline'

const navigation = [
  { name: 'Overview', href: '#' },
  { name: 'Allergens', href: '#' },
  { name: 'Nutrition', href: '#' },
]
const features = [
  {
    name: 'Easy to Find',
    description: 'The only food app that allows you to filter by allergy and nutrition to meet your food needs.',
    icon: SearchIcon,
  },
  {
    name: 'New Meal Ideas',
    description: 'Always adding new meal items from major chains with easy to understand ingredients.',
    icon: LightBulbIcon,
  },
  {
    name: 'Balanced Meal',
    description: 'No need to calculate calories anymore. Augusteats takes care of that for you!',
    icon: ScaleIcon,
  },
  {
    name: 'Tag Favorite Foods',
    description: 'Your favorite foods, one click away.',
    icon: TagIcon,
  },
  {
    name: 'Locations Near You',
    description:
      'Search for food at your local chains. Request new restaurants to be added for more options.',
    icon: LocationMarkerIcon,
  },
  {
    name: 'Easy Checkout',
    description: 'Your tasty breakfast, lunch, or dinner, is only one click away.',
    icon: ShoppingCartIcon,
  },
]
const howTo = [
  {
    id: 1,
    title: '1. Add Allergens',
    href: '#',
    category: { name: 'Manage Health Restrictions', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    preview:
      'Filter food based on Shared Fryers, Milk, Wheat, Egg, Soy, Fish, Peanuts, Tree Nuts.',
  },
  {
    id: 2,
    title: '2. Filter by Nutrition',
    href: '#',
    category: { name: 'Consider Dietary Restrictions', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1555243896-c709bfa0b564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    preview:
      'Track carbs, protein, sugar, sodium, fat.',
  },
  {
    id: 3,
    title: '3. Rapid Order',
    href: '#',
    category: { name: 'One-click to Uber Eats', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1585047668151-b281b0c89c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80',
    preview:
      'Speed to your order with your allergens and nutrition in mind.',
  },
]


export default function LandingPage() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 "
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto ">
                  <a href="#">
                    <span className="sr-only">Augusteats</span>
                    <div className="h-8 w-8">
                      <Image
                            src={logo}
                            alt="Augusteats logo"
                        />
                    </div>

                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:ml-10">
                  <a
                      href='#'
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      <span className="text-orange-500">August</span>eats
                    </a>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border-solid border-2 border-orange-500 text-base font-medium rounded-md text-gray-300 bg-gray-900 hover:bg-gray-300 hover:text-gray-900"
                >
                  Coming Soon
                </a>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div className="h-8 w-8">
                    <Image
                        src={logo}
                        alt="Augusteats logo"
                      />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block text-orange-500">August<span className="text-gray-300">eats</span></span>
                    </h1>
                    <h2 className="mt-4 text-2xl tracking-tight font-extrabold sm:mt-5 sm:text-4xl lg:mt-4 xl:text-4xl">
                      <span className="pb-3 block sm:pb-5 text-gray-300">
                        Your Food Allergen & Nutrition Ally
                      </span>
                    </h2>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      Struggling to find restaurant food given your <a className="underline decoration-orange-500">dietary restrtictions</a>? Wondering if you’re <a className="underline decoration-orange-500">allergic</a> to ingredients in that delicious meal?
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                        <WaitingList/>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          By providing your email, you agree to
                          {' '}
                          <span href="#" className="font-medium text-white">
                            join our waiting notification
                          </span>
                          .
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative lg:pl-8">
                  <div className="mx-auto max-w-md pb-20 sm:pb-60 lg:pb-0 px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <div className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none">
                    </div>
                        <Image
                        src={logo_and_icon}
                        alt="Augusteats Logo and Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Feature section with grid */}
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-orange-500 uppercase">Features</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Everything you need to quickly find a healthy meal
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Stop wasting time scrolling through menu item after menu item to find something that aligns with
                your dietary or healthy nutrition-based diets.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-500 to-orange-500 rounded-md shadow-lg">
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                          <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial section */}

          {/* Temp Section */}
          <div className="">
            <div className="lg:mx-auto mb-12 lg:m-0 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
              <div className="lg:mt-0 lg:col-start-1 lg:col-span-2">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <Image
                    src={food_features}
                    alt="Augusteats Logo and Icon"
                    // className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
              <div className="px-4 mt-12 sm:mb-12  max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-3">
                <blockquote>
                  <div>
                    <svg
                          className="h-12 w-12 text-orange-500 opacity-25"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                    <div className="mt-6">

                      <p className="mt-6 text-2xl font-medium text-gray-500">
                        Having a soy and dairy allergy makes eating out almost impossible. With Augusteats,
                          I now can quickly find tasty food and trust that the food I order out meets my constaints.
                      </p>
                    </div>
                    <footer className="mt-6">
                        <p className="text-base font-medium text-gray-500">Mr. Josiah</p>
                        <p className="text-base font-medium text-orange-500">CEO at Baby & King</p>
                      </footer>
                  </div>
                </blockquote>
              </div>

            </div>
          </div>


          {/* Blog section */}
          <div className="relative bg-gray-50 py-14 sm:py-24 lg:py-32">
            <div className="relative">
              <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-orange-500 uppercase">Learn</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  How does it work?
                </p>
                <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                  Quickly find tasty foods in three easy steps.
                </p>
              </div>
              <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                {howTo.map((post) => (
                  <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <Image
                        src={post.imageUrl}
                        alt="Augusteats Logo and Icon"
                        className="h-48 w-full object-cover"
                        width={2250}
                        height={1390}
                        layout="responsive"
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-orange-500">
                          <span className="">
                            {post.category.name}
                          </span>
                        </p>
                        <span href={post.href} className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                          <p className="mt-3 text-base text-gray-500">{post.preview}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-md mx-auto pt-2 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
            <div className="mt-2 border-t border-gray-200 py-8">
              <p className="text-base text-gray-400 text-center">&copy; 2022 Augusteats, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}