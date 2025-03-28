import React from 'react'
import { MainSection } from '../../components/mainSection/mainSection'
import { FeatureSection } from '../../components/featureSection/featureSection'
import { FunfactSection } from '../../components/funfactSection/funfactSection'
import { SubscrictionSection } from '../../components/subscrictionSection/subscrictionSection'
import { FeatureSection2 } from '../../components/featureSection2/featureSection2'
import { FooterCenterArea } from '../../components/footerCenterArea/footerCenterArea'
import { StremeoCardCarousel } from '../../components/cardCarousel/card'
import { Header } from '../../components/header/header'
import { useDispatch, useSelector } from 'react-redux'
import { testAction } from '../../redux/slice/testSlice'
import { useEffectOnce } from '../../utils/hooks'

export const MainPage = () => {
  const dispatch = useDispatch()

  useEffectOnce(() => {
    dispatch(
      testAction.test({
        _quantity: 1,
      })
    )
  })

  const { data, isFetching } = useSelector((state) => state.test)

  console.log(data, isFetching, 'data from redux--->>>')

  return (
    <div>
      <div className="row">
        <MainSection />
      </div>
      <div className="row">
        <FeatureSection />
      </div>
      <div className="row">
        <FunfactSection />
      </div>
      <div className="row">
        <SubscrictionSection />
      </div>
      <div className="row">
        <FeatureSection2 />
      </div>
      <div className="row">
        <StremeoCardCarousel />
      </div>
      <div className="row">
        <FooterCenterArea />
      </div>
    </div>
  )
}
