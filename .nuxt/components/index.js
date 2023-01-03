export const PageTitle = () => import('../../components/global/PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c))
export const TitleHead = () => import('../../components/global/TitleHead.vue' /* webpackChunkName: "components/title-head" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const About = () => import('../../components/About/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const CommonAppointment = () => import('../../components/Common/Appointment.vue' /* webpackChunkName: "components/common-appointment" */).then(c => wrapFunctional(c.default || c))
export const CommonFooter = () => import('../../components/Common/Footer.vue' /* webpackChunkName: "components/common-footer" */).then(c => wrapFunctional(c.default || c))
export const CommonHeader = () => import('../../components/Common/Header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c))
export const CommonHeaderSection = () => import('../../components/Common/Header_Section.vue' /* webpackChunkName: "components/common-header-section" */).then(c => wrapFunctional(c.default || c))
export const CommonSocialLinks = () => import('../../components/Common/SocialLinks.vue' /* webpackChunkName: "components/common-social-links" */).then(c => wrapFunctional(c.default || c))
export const Contact = () => import('../../components/Contact/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const HomeAbout = () => import('../../components/Home/About.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../../components/Home/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const HomeLeaderInfo = () => import('../../components/Home/LeaderInfo.vue' /* webpackChunkName: "components/home-leader-info" */).then(c => wrapFunctional(c.default || c))
export const HomeOfficeLocation = () => import('../../components/Home/OfficeLocation.vue' /* webpackChunkName: "components/home-office-location" */).then(c => wrapFunctional(c.default || c))
export const HomeOurPlan = () => import('../../components/Home/OurPlan.vue' /* webpackChunkName: "components/home-our-plan" */).then(c => wrapFunctional(c.default || c))
export const HomeOurTeam = () => import('../../components/Home/OurTeam.vue' /* webpackChunkName: "components/home-our-team" */).then(c => wrapFunctional(c.default || c))
export const HomePersonTeam = () => import('../../components/Home/PersonTeam.vue' /* webpackChunkName: "components/home-person-team" */).then(c => wrapFunctional(c.default || c))
export const HomePracticeArea = () => import('../../components/Home/PracticeArea.vue' /* webpackChunkName: "components/home-practice-area" */).then(c => wrapFunctional(c.default || c))
export const HomeSinglePractice = () => import('../../components/Home/SinglePractice.vue' /* webpackChunkName: "components/home-single-practice" */).then(c => wrapFunctional(c.default || c))
export const HomeStatisticSingle = () => import('../../components/Home/StatisticSingle.vue' /* webpackChunkName: "components/home-statistic-single" */).then(c => wrapFunctional(c.default || c))
export const HomeStatistics = () => import('../../components/Home/Statistics.vue' /* webpackChunkName: "components/home-statistics" */).then(c => wrapFunctional(c.default || c))
export const HomeLocation = () => import('../../components/Home/location.vue' /* webpackChunkName: "components/home-location" */).then(c => wrapFunctional(c.default || c))
export const LoaderVPlaceload = () => import('../../components/Loader/VPlaceload.vue' /* webpackChunkName: "components/loader-v-placeload" */).then(c => wrapFunctional(c.default || c))
export const OurProfile = () => import('../../components/OurProfile/OurProfile.vue' /* webpackChunkName: "components/our-profile" */).then(c => wrapFunctional(c.default || c))
export const PracticeArea = () => import('../../components/PracticeArea/PracticeArea.vue' /* webpackChunkName: "components/practice-area" */).then(c => wrapFunctional(c.default || c))
export const MediaGallery = () => import('../../components/Media/Gallery/Gallery.vue' /* webpackChunkName: "components/media-gallery" */).then(c => wrapFunctional(c.default || c))
export const MediaNewsItem = () => import('../../components/Media/News/NewsItem.vue' /* webpackChunkName: "components/media-news-item" */).then(c => wrapFunctional(c.default || c))
export const MediaNewsPagination = () => import('../../components/Media/News/Pagination.vue' /* webpackChunkName: "components/media-news-pagination" */).then(c => wrapFunctional(c.default || c))
export const MediaNewsSidebar = () => import('../../components/Media/News/sidebar.vue' /* webpackChunkName: "components/media-news-sidebar" */).then(c => wrapFunctional(c.default || c))
export const MediaVideo = () => import('../../components/Media/Video/Video.vue' /* webpackChunkName: "components/media-video" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
