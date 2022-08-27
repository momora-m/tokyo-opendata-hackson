interface IQuestionsJa {
    [key: string]: string;
    preschooler: string;
    junour12: string;
    junour34: string;
    junour56: string;
    middle1: string;
    middle2: string;
    middle3: string;
    high1: string;
    high2: string;
    high3: string;
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
    g: string;
    h: string;
    i: string;
    j: string;
    k: string;
    l: string;
    m: string;
    n: string;
    aa: string;
    bb: string;
    cc: string;
    dd: string;
    ee: string;
    ff: string;
    gg: string;
    hh: string;
    ii: string;
    jj: string;
    kk: string;
    ll: string;
    mm: string;   
}

export default function getQuestionList(questions: string[]) {


    const mappingedQuestions: string[] = [];

    const japanese: IQuestionsJa = {
        preschooler: '未就学児',
        junour12: '小学1〜2年生',
        junour34: '小学3〜4年生',
        junour56: '小学5〜6年生',
        middle1: '中学1年生',
        middle2: '中学2年生',
        middle3: '中学3年生',
        high1: '高校1年生',
        high2: '高校2年生',
        high3: '高校3年生',
        a: '子供にせがまれたため仕方なく持たせた',
        b: '子供の所在地がわかるようにするため',
        c: '持たせた方が、メディアリテラシーや情報処理能力がつくと思ったため',
        d: '習い事や塾等で必要なため',
        e: '子供の要望ではないが友達が持っており、仲間外れにされないか心配なため',
        f: '携帯電話にはない便利やアプリ等を使用するため',
        g: '保護者自身がスマートフォンにしたため',
        h: 'パソコンの代わり',
        i: '学校の授業、宿題等で必要なため',
        j: 'ゲーム機の代わり',
        k: '子供の疾病等があり、大切なコミュニケーション手段として活用するため',
        l: 'お祝い等で、親戚等からもらったため',
        m: '店員に勧められた',
        n: 'その他',
        aa: 'トラブルに遭ったことはない',
        bb: '無料アプリやコミュニケーションアプリが原因で友達等とトラブルになった',
        cc: 'メールが原因で友達等とトラブルになった',
        dd: 'メールで誹謗中傷、チェーンメールなどが届いた',
        ee: '身に覚えのない料金請求のメールが届いた',
        ff: '歩きスマホ等により何らかのトラブルにあった',
        gg: '無断で携帯･スマホ向けの有料ゲームを利用することにより、多額の請求が届いた',
        hh: '掲示板等に個人の誹謗中傷などの書き込みをされた',
        ii: 'ネット上で知り合った人と会う約束をしたり、実際に会う等していた',
        jj: '個人情報を知られた（盗まれた）',
        kk: '下着姿や裸の写真を撮ったり送ったりしていた',
        ll: 'その他',
        mm: 'わからない',        
    } 

    for (const key of Object.keys(japanese)) {
        for(const x of questions) {
            if(key == x){
                mappingedQuestions.push(japanese[key])
            }

        }
    }

    return mappingedQuestions;
}