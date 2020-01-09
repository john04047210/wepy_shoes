import wepy from 'wepy'

export default class api {
  static async getProductList() {
    return new Promise((resolve, reject) => {
      resolve([{
        id: 1,
        image: 'http://www.wfg-net.com/images/product/PT0901I/01.jpg',
        title: 'PERFETTO Hole cut & Leather sole, Bordeaux',
        price: {
          tax: true,
          value: '56,100'
        },
        tags: ['日本製', 'カーフ'],
        desc: 'ペルフェット ホールカット & レザーソール, ボルドー'
      }, {
        id: 7,
        image: 'http://www.wfg-net.com/images/product/PT0002B/07.jpg',
        title: 'PERFETTO Semi brogue & Leather sole, Brown',
        price: {
          tax: true,
          value: '56,100'
        },
        desc: 'ペルフェット セミブローグ & レザーソール, ブラウン'
      }, {
        id: 8,
        image: 'http://www.wfg-net.com/images/product/PT0002B/07.jpg',
        title: 'PERFETTO Semi brogue & Leather sole, Brown',
        price: {
          tax: true,
          value: '56,100'
        },
        desc: 'ペルフェット セミブローグ & レザーソール, ブラウン'
      }])
    })
  }

  static async getProductDetail(product_id) {
    return new Promise((resolve, reject) => {
      resolve({
        id: product_id,
        image: 'http://www.wfg-net.com/images/product/PT0901I/01.jpg',
        title: 'PERFETTO Hole cut & Leather sole, Bordeaux',
        price: {
          tax: true,
          value: '56,100'
        },
        tags: ['日本製', 'カーフ'],
        desc: 'ペルフェット ホールカット & レザーソール, ボルドー',
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
      })
    })
  }
}
