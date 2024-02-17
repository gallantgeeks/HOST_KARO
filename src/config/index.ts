export const PRODUCT_CATEGORIES = [
  {
    label: 'Products',
    value: 'products' as const,
    featured: [
      {
        name: 'Paintings',
        href: `/products?category=products`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'Digital_Arts',
        href: '/products?category=products&sort=desc',
        imageSrc: '/nav/icons/art3.jpg',
      },
    ],
  },
  {
    label: 'Resources',
    value: 'resources' as const,
    featured: [
      {
        name: 'e-Books',
        href: `/products?category=resources`,
        imageSrc: '/nav/icons/books.jpg',
      },
      {
        name: 'Courses',
        href: '/products?category=resources&sort=desc',
        imageSrc: '/nav/icons/courses.jpg',
      },
      {
        name: 'Workshops',
        href: '/products?category=resources',
        imageSrc: '/nav/icons/workshop.jpg',
      },
      {
        name: 'Webinars',
        href: '/products?category=resources',
        imageSrc: '/nav/icons/webinar.jpg',
      },
      {
        name: 'Online_Events',
        href: '/products?category=resources',
        imageSrc: '/nav/icons/events.jpg',
      },
    ],
  },
  {
    label: 'Membership',
    value: 'membership' as const,
    featured: [
      {
        name: 'Pricing',
        href: `/products?category=membership`,
        imageSrc: '/nav/icons/pricing.jpg',
      },
      {
        name: 'Marketing_Tools',
        href: '/products?category=membership&sort=desc',
        imageSrc: '/nav/icons/mtools.jpg',
      },
      {
        name: 'Downloadable_Resources',
        href: '/products?category=membership',
        imageSrc: '/nav/icons/dresources.jpg',
      },
    ],
  },
]
