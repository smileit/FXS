import CONSTS from '../../consts'
const { WHO_WE_ARE, WHAT_WE_OFFER, WHO_WE_SERVE, FOOTER } = CONSTS.SECTION

export default {
  menus: [
    {
      text: '关于我们',
      name: WHO_WE_ARE
    },
    {
      text: '我们的服务',
      name: WHAT_WE_OFFER
    },
    {
      text: '解决方案',
      name: WHO_WE_SERVE
    },
    {
      text: '联系我们',
      name: FOOTER
    }
  ]
}