import {
  servicesOverview,
  serviceDesign,
  serviceConstruction,
  serviceEquipment,
  serviceSoftware,
  getServicesBlock,
  getServiceDetailBlocks,
  HOME_PAGE_ID,
  type ServiceItem
} from '~/data/services'

// 服务数据 composable
export function useServices(pageId?: string) {
  const targetPageId = pageId || HOME_PAGE_ID

  // 获取服务概览列表（按页面过滤）
  const overviewList = computed(() => {
    const servicesBlock = getServicesBlock(targetPageId)
    const config = servicesBlock?.config || {}
    
    // 优先使用 cards 数组格式
    if (config.cards && Array.isArray(config.cards)) {
      return config.cards.map((card: any) => ({
        id: card.id,
        title: card.title,
        subtitle: card.subtitle || '',
        icon: card.icon,
        description: card.description,
        features: card.features || []
      }))
    }
    
    // 兼容旧格式：如果没有 cards，但有 service-detail 类型数据，转换为 cards 格式
    if (config.id || config.title) {
      return [{
        id: config.id || 'service',
        title: config.title || '',
        subtitle: config.badge || '',
        icon: 'fa-cogs',
        description: config.description || '',
        features: config.features || []
      }]
    }
    
    return []
  })

  // 获取服务头部信息
  const servicesHeader = computed(() => {
    const servicesBlock = getServicesBlock(targetPageId)
    return {
      title: servicesBlock?.config?.title || '核医学场所 · 全生命周期解决方案',
      subtitle: servicesBlock?.config?.subtitle || '闭环服务',
      detailLinks: servicesBlock?.config?.detailLinks || []
    }
  })

  // 获取服务概览卡片列表（供 ServicesSection 使用）
  const servicesCards = computed(() => {
    const servicesBlock = getServicesBlock(targetPageId)
    return servicesBlock?.config?.cards || []
  })

  // 获取各项服务详情
  const serviceDetailBlocks = computed(() => getServiceDetailBlocks(targetPageId))

  const design = computed(() => {
    const block = serviceDetailBlocks.value.find((b: any) => b.config?.id === 'service-design')?.config || {}
    return {
      id: 'design',
      badge: block.badge || '精准设计 · 合规先行',
      title: block.title || '全流程核医学专项设计',
      image: block.image || '/berry-medical-web/images/services/design.jpg',
      imageAlt: block.imageAlt || '核医学设计规划与布局',
      description: block.description || '',
      features: block.features || []
    }
  })

  const construction = computed(() => {
    const block = serviceDetailBlocks.value.find((b: any) => b.config?.id === 'service-construction')?.config || {}
    return {
      id: 'construction',
      badge: block.badge || '匠心施工 · 全程可控',
      title: block.title || '辐射防护与净化工程总承包',
      image: block.image || '/berry-medical-web/images/services/construction.jpg',
      imageAlt: block.imageAlt || '核医学辐射防护施工',
      description: block.description || '',
      features: block.features || []
    }
  })

  const equipment = computed(() => {
    const block = serviceDetailBlocks.value.find((b: any) => b.config?.id === 'service-equipment')?.config || {}
    return {
      id: 'equipment',
      badge: block.badge || '尖端设备 · 智慧监测',
      title: block.title || '核素治疗及辐射监测仪器',
      image: block.image || '/berry-medical-web/images/services/equipment.jpg',
      imageAlt: block.imageAlt || '核医学监测与防护设备',
      description: block.description || '',
      features: block.features || []
    }
  })

  const software = computed(() => {
    const block = serviceDetailBlocks.value.find((b: any) => b.config?.id === 'service-software')?.config || {}
    return {
      id: 'software',
      badge: block.badge || '数字孪生 · 智慧中枢',
      title: block.title || '瑞核V1.0 核医学智慧管理系统',
      image: block.image || '/berry-medical-web/images/services/software.jpg',
      imageAlt: block.imageAlt || '智慧管理系统界面',
      description: block.description || '',
      features: block.features || []
    }
  })

  // 根据 ID 获取服务详情
  const getServiceById = (id: string) => {
    const block = serviceDetailBlocks.value.find((b: any) => b.config?.id === `service-${id}`)?.config
    if (!block) return null
    return {
      id,
      badge: block.badge || '',
      title: block.title || '',
      image: block.image || '',
      imageAlt: block.imageAlt || '',
      description: block.description || '',
      features: block.features || []
    }
  }

  return {
    overviewList,
    servicesHeader,
    servicesCards,
    design,
    construction,
    equipment,
    software,
    getServiceById
  }
}
