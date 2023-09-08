// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { ItemCard } from 'src/components/ItemCard'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Stashtag" description="Home page" />

      <ItemCard
        title={'Hashtag Helper'}
        description={
          'Save your used hashtags in one place for consistent social media posting'
        }
        icon={'🎒'}
      />
    </>
  )
}

export default HomePage
