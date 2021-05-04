export default function(kataConfig) {
  return {
    widgets: [
      {
        name: 'welcome',
        options: {
          client: kataConfig.domain.prettyName || ''
        },
        layout: {
          width: 'small',
          height: 'small'
        }
      },
      {
        name: 'netlify',
        layout: {
          width: 'small',
          height: 'small'
        },
        options: {
          title: 'Deploy changes',
          sites: kataConfig.netlifyDeploy || []
        }
      },
      {
        name: 'project-users',
        layout: {
          width: 'small',
          height: 'small'
        }
      }
    ]
  }
  
}
