export default {
  model: {
    event: ['close'],
  },
  props: {
    store: Object,
  },
  components: {},
  template: `
    <div class="modal">
      <div class="close btn" @click="closeBtn">X</div>
      <div class="modal-body">
        <div class="modal-title text-center">注意事項</div>
        <div class="store-info">
          <div class="modal-subtitle">台灣代駕專屬優惠注意事項：</div>
          <p>欲參加本活動之消費者（下稱「參加人」），於參加之同時，即視為同意接受本注意事項之規範；如不同意本注意事項之全部或一部份，請勿參加本活動。</p>
          <ol>
            <li>活動期間：2021年04月01日至2021年12月31日。</li>
            <li>活動資格：群悅科技股份有限公司(下稱台灣代駕)所營運台灣代駕 App之註冊會員。</li>
            <li>活動參加方式：本活動限使用台灣代駕App掃碼，並導至永豐銀行所提供之掃碼付款頁面進行付款，始可依本活動辦法，享有餐廳獨家優惠以及永豐信用卡刷卡金回饋，優惠內容悉依台灣代駕官方網站及各餐廳擺放之掃碼付款立牌標示之折扣為準，本活動不得與獨家合作餐廳公告之相關優惠方案併用（包含但不限於：獨家合作餐廳會員卡優惠、招待卡或禮券折抵金額，或消費項目屬於獨家合作餐廳之特惠商品、特殊節日等），餐廳對相關優惠方案擁有最終解釋權。</li>
            <li>活動期間至合作餐廳消費，並於24小時內呼叫駕服務，綁定永豐信用卡付款，依照當趟代駕消費金額，可享代駕優惠券回饋，單趟代駕費用滿 $300~$1000 回饋 $100 代駕優惠券；$1001～$2000 回饋 $150 代駕優惠券；$2001 以上回饋 $200 代駕優惠券，單筆最高上限為 $200 ，單次餐廳消費限回饋1筆，代駕優惠券將在結帳後匯入台灣代駕APP帳號「我的優惠券」中。</li>
            <li>活動期間屆至時，餐廳優惠、代駕優惠券以及信用卡刷卡金回饋，將自動終止。</li>
            <li>本活動以新台幣為單位。</li>
            <li>台灣代駕保留隨時增刪、調整、暫停或取消本活動及本活動辦法內容及細節之權利，無須另行通知；台灣代駕對本活動及本活動辦法擁有最終解釋權。</li>
            <li>參加人不得要求台灣代駕、永豐銀行及各獨家合作餐廳，將刷卡金回饋或餐廳優惠進行折現、替換為其他物品或任何其他費用。參加人亦不得要求將優惠轉讓與其他人。</li>
            <li>本活動注意事項載明於台灣代駕活動網頁中，參加者於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，台灣代駕得取消其參加資格，並對於任何破壞本活動之行為保留相關權利。</li>
            <li>本活動係與永豐商業銀行股份有限公司及各獨家合作餐廳合作辦理，參加人使用永豐銀行信用卡、掃碼付款，以及至各獨家合作餐廳消費用餐等，均與台灣代駕無涉。如刷卡金回饋或餐廳餐點、服務內容有任何問題，請洽永豐銀行及各獨家合作餐廳。</li>
            </ol>
          <div class="modal-subtitle">永豐信用卡注意事項：</div>
          <ol>
            <li>本活動限使用 台灣代駕App掃碼，並使用永豐銀行之掃碼付款，始可享有刷卡金回饋。</li>
            <li>餐廳刷卡金回饋：永豐刷卡金回饋每卡單店單日限回饋1筆，如持卡人於單一店家有多筆消費交易，以最高交易金額做為回饋計算，單筆刷卡金回饋上限為 $300。<br>舉例：用戶於提供 15% 折扣之餐廳，消費原價 ＄1,000 之餐點，以台灣代駕APP掃碼付款功能結帳並選用 Apple Pay 綁定永豐信用卡付款，享現折 ＄150 （$1,000 x15%)，折扣後實際支付金額為 $850 ，次月可獲得永豐銀行提供之 25% 加碼刷卡金回饋 $213 ($850 x 25%)，總計共獲得 $363 （$150+$213) 之優惠。</li>
            <li>代駕刷卡金回饋：持卡人於活動期間至合作餐廳消費，並於24小時內呼叫代駕服務以永豐刷卡消費，即可享36% 刷卡金回饋，單筆刷卡金回饋上限為 $300，每卡單店單日限回饋1筆。<br>舉例：用戶於活動餐廳消費並透過台灣代駕app結帳完成，於餐廳呼叫代駕。此趟代駕費用為＄800，綁定永豐信用卡付款，次月可獲得永豐銀行提供之 36% 加碼刷卡金回饋 $288 ($800 x 36%)。</li>
            <li>永豐銀行信用卡正、附卡分開計算交易金額與回饋資格，刷卡金回饋統一於交易次次月起陸續於正卡人帳單，以折抵信用卡帳單消費款方式提供，刷卡回饋金僅限折抵信用卡帳單消費款，恕不得要求轉讓、提領或兌現，亦不得要求替換為其他物品或任何其他費用。</li>
            <li>本活動僅限活動期間刷卡交易，得計算刷卡金回饋，且應以回饋計算前已入帳完成者為限，若因獨家優惠餐廳未請款，導致消費未計入，恕與永豐銀行無涉。</li>
            <li>本活動得享有刷卡金回饋之信用卡以提供刷卡金回饋前仍為有效之信用卡為限，持卡人如於永豐銀行提供刷卡金回饋前，有發生退貨、取消交易、其他原因須退回消費款項，或持卡人有停卡、延滯繳款或其他違反信用卡契約之情事者，將喪失受領回饋資格，永豐銀行亦無義務提供刷卡金回饋。</li>
            <li>永豐銀行並未介入商品之交付或商品瑕疵等買賣之實體關係，相關商品退貨或服務取消之退款事宜，持卡人應先洽獨家合作餐廳尋求解決，如無法解決，得要求永豐銀行就該筆交易以「帳款疑義之處理程序」辦理，參加人不得因此拒付信用卡款項。</li>
            <li>永豐銀行刷卡金回饋最終核准與否，及核准金額之權利，並保留上述活動修改、終止或變更之權利。</li>
          </ol>
          
        </div>
       
        
      </div>
      <div class="modal-bg"></div>
    <div>
  `,
  data: function () {
    return {
      subject: new Rx.Subject(),
      url: './api/data.json'
    };
  },
  mounted: function () {
    console.log('note init');
  },
  methods: {
    closeBtn:function(){
      this.$emit('close');
    }
  },
  beforeDestroy: function () {
    this.subject.next();
    this.subject.complete();
  },
};
