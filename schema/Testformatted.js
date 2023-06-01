cube(`Testformatted`, {
  sql: `SELECT * FROM "cube-db".testformatted`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    thumbnailUrl: {
      sql: `thumbnail_url`,
      type: `string`
    },
    
    subject: {
      sql: `subject`,
      type: `string`
    },
    
    program: {
      sql: `program`,
      type: `string`
    },
    
    set: {
      sql: `set`,
      type: `string`
    },
    
    grade: {
      sql: `grade`,
      type: `string`
    },
    
    price: {
      sql: `price`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
