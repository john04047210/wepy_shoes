import wepy from 'wepy'

export default class api {
  static async getProductList() {
    return new Promise((resolve, reject) => {
      resolve([{
        id: 1,
        product_id: 'WFGxPERFETTO',
        image: 'http://www.wfg-net.com/images/product/VNW0013A/09.jpg',
        title: 'WFGxPERFETTO Doublemonk & Rubber sole, Black',
        price: {
          tax: true,
          value: '40,700'
        },
        tags: ['日本製', 'カーフ'],
        desc: 'WFGxPERFETTO ダブルモンク & ラバーソール, ブラック'
      }, {
        id: 2,
        image: 'http://www.wfg-net.com/images/product/PT0002G/02.jpg',
        title: 'PERFETTO Semi brogue & Leather sole, Green',
        price: {
          tax: true,
          value: '56,100'
        },
        desc: 'ペルフェット セミブローグ & レザーソール, グリーン'
      }, {
        id: 3,
        image: 'http://www.wfg-net.com/images/product/PT0002B/07.jpg',
        title: 'PERFETTO Semi brogue & Leather sole, Brown',
        price: {
          tax: true,
          value: '56,100'
        },
        desc: 'ペルフェット セミブローグ & レザーソール, ブラウン'
      }, {
        id: 4,
        image: 'http://www.wfg-net.com/images/product/OTW3301B/02.jpg',
        title: 'ORIENTAL Doublemonk & Leather sole, Brown',
        price: {
          tax: true,
          value: '40,700'
        },
        desc: 'ORIENTAL ダブルモンク & レザーソール, ブラウン'
      }, {
        id: 5,
        image: 'http://www.wfg-net.com/images/product/OTW3300X/02.jpg',
        title: 'ORIENTAL Singlemonk & Leather sole, Dark brown',
        price: {
          tax: true,
          value: '40,700'
        },
        desc: 'ORIENTAL シングルモンク & レザーソール, ダークブラウン'
      }, {
        id: 6,
        image: 'http://www.wfg-net.com/images/product/OTW3300W/02.jpg',
        title: 'ORIENTAL Singlemonk & Leather sole, Black',
        price: {
          tax: true,
          value: '40,700'
        },
        desc: 'ORIENTAL シングルモンク & レザーソール, ブラック'
      }, {
        id: 7,
        image: 'http://www.wfg-net.com/images/product/OTW3103A/02.jpg',
        title: 'ORIENTAL Semi brogue & Leather sole, Black',
        price: {
          tax: true,
          value: '40,700'
        },
        desc: 'ORIENTAL セミブローグ & レザーソール, ブラック'
      }, {
        id: 8,
        image: 'http://www.wfg-net.com/images/product/OTW3101A/02.jpg',
        title: 'ORIENTAL Straight tip & Leather sole, Black',
        price: {
          tax: true,
          value: '40,700'
        },
        desc: 'ORIENTAL ストレートチップ & レザーソール, ブラック'
      }])
    })
  }

  static async getProductDetail(product_id) {
    let products = [{
      id: 1,
      product_id: 'WFGxPERFETTO',
      image: 'http://www.wfg-net.com/images/product/VNW0013A/09.jpg',
      swiper_images: [
        'http://www.wfg-net.com/images/product/VNW0013A/09.jpg',
        'http://www.wfg-net.com/images/product/VNW0013A/10.jpg',
        'http://www.wfg-net.com/images/product/VNW0013A/11.jpg',
        'http://www.wfg-net.com/images/product/VNW0013A/12.jpg',
        'http://www.wfg-net.com/images/product/VNW0013A/13.jpg',
        'http://www.wfg-net.com/images/product/VNW0013A/14.jpg',
        'http://www.wfg-net.com/images/product/VNW0013A/15.jpg',
        'http://www.wfg-net.com/images/product/VNW0013A/16.jpg'
      ],
      title: 'WFGxPERFETTO Doublemonk & Rubber sole, Black',
      price: {
        tax: true,
        value: '40,700'
      },
      tags: ['日本製', 'カーフ'],
      desc: 'WFGxPERFETTO ダブルモンク & ラバーソール, ブラック',
      prop: [{
        title: '品番',
        value: 'VNW0013A'
      }, {
        title: 'ブランド',
        value: 'WFGxPERFETTO'
      }, {
        title: 'カラー',
        value: 'BLACK'
      }, {
        title: 'カテゴリー',
        value: 'ダブルモンク'
      }, {
        title: '原産国',
        value: '日本'
      }, {
        title: '製法',
        value: 'グッドイヤーウェルト製法'
      }, {
        title: 'アッパー素材',
        value: 'カーフ'
      }, {
        title: 'タンナー',
        value: 'イタリアンタンナー'
      }, {
        title: 'ソール素材',
        value: 'ラバー'
      }, {
        title: '区分',
        value: '靴メンズ'
      }]
    }, {
      id: 2,
      product_id: 'PERFETTO',
      image: 'http://www.wfg-net.com/images/product/PT0002G/02.jpg',
      swiper_images: [
        'http://www.wfg-net.com/images/product/PT0002G/02.jpg',
        'http://www.wfg-net.com/images/product/PT0002G/03.jpg',
        'http://www.wfg-net.com/images/product/PT0002G/04.jpg'
      ],
      title: 'PERFETTO Semi brogue & Leather sole, Green',
      price: {
        tax: true,
        value: '56,100'
      },
      tags: ['日本製', 'カーフ'],
      desc: 'ペルフェット セミブローグ & レザーソール, グリーン',
      prop: [{
        title: '品番',
        value: 'PT0002G'
      }, {
        title: 'ブランド',
        value: 'PERFETTO'
      }, {
        title: 'カラー',
        value: 'GREEN'
      }, {
        title: 'カテゴリー',
        value: 'セミブローグ'
      }, {
        title: '原産国',
        value: '日本'
      }, {
        title: '製法',
        value: 'グッドイヤーウェルト製法'
      }, {
        title: 'アッパー素材',
        value: 'カーフ'
      }, {
        title: 'タンナー',
        value: 'イルチア'
      }, {
        title: 'ソール素材',
        value: 'レザー'
      }, {
        title: '区分',
        value: '靴メンズ'
      }]
    }, {
      id: 3,
      product_id: 'PERFETTO',
      image: 'http://www.wfg-net.com/images/product/PT0002B/07.jpg',
      swiper_images: [
        'http://www.wfg-net.com/images/product/PT0002B/07.jpg',
        'http://www.wfg-net.com/images/product/PT0002B/08.jpg',
        'http://www.wfg-net.com/images/product/PT0002B/09.jpg'
      ],
      title: 'PERFETTO Semi brogue & Leather sole, Brown',
      price: {
        tax: true,
        value: '56,100'
      },
      tags: ['日本製', 'カーフ'],
      desc: 'ペルフェット セミブローグ & レザーソール, ブラウン',
      prop: [{
        title: '品番',
        value: 'PT0002B'
      }, {
        title: 'ブランド',
        value: 'PERFETTO'
      }, {
        title: 'カラー',
        value: 'BROWN'
      }, {
        title: 'カテゴリー',
        value: 'セミブローグ'
      }, {
        title: '原産国',
        value: '日本'
      }, {
        title: '製法',
        value: 'グッドイヤーウェルト製法'
      }, {
        title: 'アッパー素材',
        value: 'カーフ'
      }, {
        title: 'タンナー',
        value: 'ゾンタ'
      }, {
        title: 'ソール素材',
        value: 'レザー'
      }, {
        title: '区分',
        value: '靴メンズ'
      }]
    }, {
      id: 4,
      product_id: 'ORIENTAL',
      image: 'http://www.wfg-net.com/images/product/OTW3301B/02.jpg',
      swiper_images: [
        'http://www.wfg-net.com/images/product/OTW3301B/02.jpg',
        'http://www.wfg-net.com/images/product/OTW3301B/03.jpg',
        'http://www.wfg-net.com/images/product/OTW3301B/04.jpg'
      ],
      title: 'ORIENTAL Doublemonk & Leather sole, Brown',
      price: {
        tax: true,
        value: '40,700'
      },
      tags: ['日本製', 'キップ'],
      desc: 'ORIENTAL ダブルモンク & レザーソール, ブラウン',
      prop: [{
        title: '品番',
        value: 'OTW3301B'
      }, {
        title: 'ブランド',
        value: 'ORIENTAL'
      }, {
        title: 'カラー',
        value: 'BROWN'
      }, {
        title: 'カテゴリー',
        value: 'ダブルモンク'
      }, {
        title: '原産国',
        value: '日本'
      }, {
        title: '製法',
        value: 'グッドイヤーウェルト製法'
      }, {
        title: 'アッパー素材',
        value: 'キップ'
      }, {
        title: 'タンナー',
        value: '国産'
      }, {
        title: 'ソール素材',
        value: 'レザー'
      }, {
        title: '区分',
        value: '靴メンズ'
      }]
    }, {
      id: 5,
      product_id: 'ORIENTAL',
      image: 'http://www.wfg-net.com/images/product/OTW3300X/02.jpg',
      swiper_images: [
        'http://www.wfg-net.com/images/product/OTW3300X/02.jpg',
        'http://www.wfg-net.com/images/product/OTW3300X/03.jpg',
        'http://www.wfg-net.com/images/product/OTW3300X/04.jpg'
      ],
      title: 'ORIENTAL Singlemonk & Leather sole, Dark brown',
      price: {
        tax: true,
        value: '40,700'
      },
      tags: ['日本製', 'スウェード'],
      desc: 'ORIENTAL シングルモンク & レザーソール, ダークブラウン',
      prop: [{
        title: '品番',
        value: 'OTW3300X'
      }, {
        title: 'ブランド',
        value: 'ORIENTAL'
      }, {
        title: 'カラー',
        value: 'DARK BROWN'
      }, {
        title: 'カテゴリー',
        value: 'シングルモンク'
      }, {
        title: '原産国',
        value: '日本'
      }, {
        title: '製法',
        value: 'グッドイヤーウェルト製法'
      }, {
        title: 'アッパー素材',
        value: 'スウェード'
      }, {
        title: 'タンナー',
        value: 'C.F.ステッド'
      }, {
        title: 'ソール素材',
        value: 'レザー'
      }, {
        title: '区分',
        value: '靴メンズ'
      }]
    }, {
      id: 6,
      product_id: 'ORIENTAL',
      image: 'http://www.wfg-net.com/images/product/OTW3300W/02.jpg',
      swiper_images: [
        'http://www.wfg-net.com/images/product/OTW3300W/02.jpg',
        'http://www.wfg-net.com/images/product/OTW3300W/03.jpg',
        'http://www.wfg-net.com/images/product/OTW3300W/04.jpg'
      ],
      title: 'ORIENTAL Singlemonk & Leather sole, Black',
      price: {
        tax: true,
        value: '40,700'
      },
      tags: ['日本製', 'スウェード'],
      desc: 'ORIENTAL シングルモンク & レザーソール, ブラック',
      prop: [{
        title: '品番',
        value: 'OTW3300W'
      }, {
        title: 'ブランド',
        value: 'ORIENTAL'
      }, {
        title: 'カラー',
        value: 'BLACK'
      }, {
        title: 'カテゴリー',
        value: 'シングルモンク'
      }, {
        title: '原産国',
        value: '日本'
      }, {
        title: '製法',
        value: 'グッドイヤーウェルト製法'
      }, {
        title: 'アッパー素材',
        value: 'スウェード'
      }, {
        title: 'タンナー',
        value: 'C.F.ステッド'
      }, {
        title: 'ソール素材',
        value: 'レザー'
      }, {
        title: '区分',
        value: '靴メンズ'
      }]
    }, {
      id: 7,
      product_id: 'ORIENTAL',
      image: 'http://www.wfg-net.com/images/product/OTW3103A/02.jpg',
      swiper_images: [
        'http://www.wfg-net.com/images/product/OTW3103A/02.jpg',
        'http://www.wfg-net.com/images/product/OTW3103A/05.jpg',
        'http://www.wfg-net.com/images/product/OTW3103A/06.jpg'
      ],
      title: 'ORIENTAL Semi brogue & Leather sole, Black',
      price: {
        tax: true,
        value: '40,700'
      },
      tags: ['日本製', 'キップ'],
      desc: 'ORIENTAL セミブローグ & レザーソール, ブラック',
      prop: [{
        title: '品番',
        value: 'OTW3103A'
      }, {
        title: 'ブランド',
        value: 'ORIENTAL'
      }, {
        title: 'カラー',
        value: 'BLACK'
      }, {
        title: 'カテゴリー',
        value: 'セミブローグ'
      }, {
        title: '原産国',
        value: '日本'
      }, {
        title: '製法',
        value: 'グッドイヤーウェルト製法'
      }, {
        title: 'アッパー素材',
        value: 'キップ'
      }, {
        title: 'タンナー',
        value: '国産'
      }, {
        title: 'ソール素材',
        value: 'レザー'
      }, {
        title: '区分',
        value: '靴メンズ'
      }]
    }, {
      id: 8,
      product_id: 'ORIENTAL',
      image: 'http://www.wfg-net.com/images/product/OTW3101A/02.jpg',
      swiper_images: [
        'http://www.wfg-net.com/images/product/OTW3101A/02.jpg',
        'http://www.wfg-net.com/images/product/OTW3101A/03.jpg',
        'http://www.wfg-net.com/images/product/OTW3101A/04.jpg'
      ],
      title: 'ORIENTAL Semi brogue & Leather sole, Black',
      price: {
        tax: true,
        value: '40,700'
      },
      tags: ['日本製', 'キップ'],
      desc: 'ORIENTAL セミブローグ & レザーソール, ブラック',
      prop: [{
        title: '品番',
        value: 'OTW3101A'
      }, {
        title: 'ブランド',
        value: 'ORIENTAL'
      }, {
        title: 'カラー',
        value: 'BLACK'
      }, {
        title: 'カテゴリー',
        value: 'ストレートチップ'
      }, {
        title: '原産国',
        value: '日本'
      }, {
        title: '製法',
        value: 'グッドイヤーウェルト製法'
      }, {
        title: 'アッパー素材',
        value: 'キップ'
      }, {
        title: 'タンナー',
        value: '-'
      }, {
        title: 'ソール素材',
        value: 'レザー'
      }, {
        title: '区分',
        value: '靴メンズ'
      }]
    }]

    return new Promise((resolve, reject) => {
      let product = products.find(ele => ele.id == product_id)
      resolve(product)
    })
  }
}
