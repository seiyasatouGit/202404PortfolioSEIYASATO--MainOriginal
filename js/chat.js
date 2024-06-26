
// スクロールの設定
// JavaScriptを使って、コンテンツが要素を超えた場合にスクロールバーを表示する
// var container = document.getElementById('chat-log');
// container.style.overflow = 'auto';



// 応答１

// document.getElementById('send-button').addEventListener('click', function() {
//     const userInput = document.getElementById('user-input').value;
//     if (userInput.trim() !== '') {
//         appendMessage('ユーザー', userInput, 'user-message');
//         document.getElementById('user-input').value = '';
//         // シンプルな応答ロジック
//         setTimeout(function() {
//             appendMessage('ボット', 'これはフェイクのチャットボット応答です。', '');
//         }, 1000);
//     }
// });

// function appendMessage(sender, message, className) {
//     const chatLog = document.getElementById('chat-log');
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${className}`;
//     messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
//     chatLog.appendChild(messageDiv);
//     chatLog.scrollTop = chatLog.scrollHeight;
// }




// //会話追加２
// document.getElementById('send-button').addEventListener('click', function() {
//     const userInput = document.getElementById('user-input').value;
//     if (userInput.trim() !== '') {
//         appendMessage('ユーザー', userInput, 'user-message');
//         document.getElementById('user-input').value = '';
//         // 応答ロジック
//         setTimeout(function() {
//             const botResponse = generateResponse(userInput);
//             appendMessage('ボット', botResponse, '');
//         }, 1000);
//     }
// });

// function appendMessage(sender, message, className) {
//     const chatLog = document.getElementById('chat-log');
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${className}`;
//     messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
//     chatLog.appendChild(messageDiv);
//     chatLog.scrollTop = chatLog.scrollHeight;
// }

// function generateResponse(input) {
//     const normalizedInput = input.toLowerCase().trim();
//     let response = 'これはフェイクのチャットボット応答です。';

//     if (normalizedInput.includes('こんにちは')) {
//         response = 'こんにちは！ご機嫌いかがですか？';
//     } else if (normalizedInput.includes('元気')) {
//         response = 'それは良かったです！';
//     } else if (normalizedInput.includes('名前')) {
//         response = '私はチャットボットです。';
//     } else if (normalizedInput.includes('ありがとう')) {
//         response = 'どういたしまして！';
//     }

//     return response;
// }


// //　会話追加３
// document.getElementById('send-button').addEventListener('click', function() {
//     const userInput = document.getElementById('user-input').value;
//     if (userInput.trim() !== '') {
//         appendMessage('ユーザー', userInput, 'user-message');
//         document.getElementById('user-input').value = '';
//         // 応答ロジック
//         setTimeout(function() {
//             const botResponse = generateResponse(userInput);
//             appendMessage('ボット', botResponse, '');
//         }, 1000);
//     } else {
//         appendMessage('ボット', 'テキスト(質問)を入力してください。', '');
//     }
// });

// function appendMessage(sender, message, className) {
//     const chatLog = document.getElementById('chat-log');
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${className}`;
//     messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
//     chatLog.appendChild(messageDiv);
//     chatLog.scrollTop = chatLog.scrollHeight;
// }

// function generateResponse(input) {
//     const normalizedInput = input.toLowerCase().trim();
//     let response = 'すみません、わかりません。';

//     if (normalizedInput.includes('こんにちは')) {
//         response = 'こんにちは！ご機嫌いかがですか？';
//     } else if (normalizedInput.includes('元気')) {
//         response = 'それは良かったです！';
//     } else if (normalizedInput.includes('名前')) {
//         response = '私はチャットボットです。';
//     } else if (normalizedInput.includes('ありがとう')) {
//         response = 'どういたしまして！';
//     } else if (normalizedInput.includes('天気')) {
//         response = '今日の天気はどうでしょうね？';
//     } else if (normalizedInput.includes('時間')) {
//         response = '今何時か分かりませんが、時計を見てください。';
//     } else if (normalizedInput.includes('趣味')) {
//         response = '私の趣味は人と話すことです。';
//     } else if (normalizedInput.includes('仕事')) {
//         response = '私の仕事はあなたと話すことです。';
//     } else if (normalizedInput.includes('好きな食べ物')) {
//         response = '私はプログラムなので食べ物を食べませんが、ピザが人気ですね。';
//     } else if (normalizedInput.includes('場所')) {
//         response = 'それはどこですか？';
//     } else if (normalizedInput.includes('助けて')) {
//         response = 'どうしましたか？';
//     } else if (normalizedInput.includes('おはよう')) {
//         response = 'おはようございます！';
//     } else if (normalizedInput.includes('おやすみ')) {
//         response = 'おやすみなさい。良い夢を。';
//     } else if (normalizedInput.includes('好きな色')) {
//         response = '私は色を持っていませんが、青が好きです。';
//     } else if (normalizedInput.includes('年齢')) {
//         response = '私は年を取りません。';
//     }

//     return response;
// }








// あらゆるパターンに対応出来るように３５００個項目を追加する。　　４

document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage('ユーザー', userInput, 'user-message');
        document.getElementById('user-input').value = '';
        // 応答ロジック
        setTimeout(function() {
            const botResponse = generateResponse(userInput);
            appendMessage('ボット', botResponse, '');
        }, 1000);
    } else {
        appendMessage('ボット', 'テキスト(質問)を入力してください', '');
    }
});

function appendMessage(sender, message, className) {
    const chatLog = document.getElementById('chat-log');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function generateResponse(input) {
    const normalizedInput = input.toLowerCase().trim();
    const responses = {
        'こんにちは': 'こんにちは！ご機嫌いかがですか？',
        '元気': 'それは良かったです！',
        '名前': '私はチャットボットです。',
        'ありがとう': 'どういたしまして！',
        '天気': '今日の天気はどうでしょうね？',
        '時間': '今何時か分かりませんが、時計を見てください。',
        '趣味': '私の趣味は人と話すことです。',
        '仕事': '私の仕事はあなたと話すことです。',
        '好きな食べ物': '私はプログラムなので食べ物を食べませんが、ピザが人気ですね。',
        '場所': 'それはどこですか？',
        '助けて': 'どうしましたか？',
        'おはよう': 'おはようございます！',
        'おやすみ': 'おやすみなさい。良い夢を。',
        '好きな色': '私は色を持っていませんが、青が好きです。',
        '年齢': '私は年を取りません。',
        '料金': '料金についてはウェブサイトをご覧ください。',
        '返金': '返金ポリシーについてはカスタマーサポートにお問い合わせください。',
        '営業時間': '営業時間は月曜日から金曜日の9時から18時までです。',
        '住所': '当社の住所はウェブサイトの「お問い合わせ」ページに記載されています。',
        '電話番号': 'お電話でのお問い合わせは、ウェブサイトに記載の番号までお願いします。',
        'メール': 'メールでのお問い合わせは、support@example.comまでお願いします。',
        '注文': 'ご注文はウェブサイトから行えます。',
        '発送': '発送についての詳細は、発送ポリシーのページをご覧ください。',
        '納期': '納期は通常1週間程度です。',
        '返品': '返品ポリシーについては、返品ページをご覧ください。',
        '保証': '製品の保証については、保証ページをご覧ください。',
        'アカウント': 'アカウントに関する問題は、サポートまでお問い合わせください。',
        'パスワード': 'パスワードのリセットは、ログインページから行えます。',
        'キャンセル': '注文のキャンセルは、マイアカウントページから行えます。',
        '在庫': '在庫の確認は、製品ページをご覧ください。',
        '支払い方法': '支払い方法については、支払い情報のページをご覧ください。',
        'クーポン': 'クーポンの使用方法は、クーポンポリシーのページをご覧ください。',
        'セール': '現在のセール情報は、セールページをご覧ください。',
        'ニュースレター': 'ニュースレターの登録は、ホームページから行えます。',
        'ブログ': '最新のブログ記事は、ブログページをご覧ください。',
        'ソーシャルメディア': 'ソーシャルメディアのリンクは、フッターにあります。',
        'プライバシー': 'プライバシーポリシーについては、プライバシーページをご覧ください。',
        '利用規約': '利用規約については、利用規約ページをご覧ください。',
        'ヘルプ': 'ヘルプが必要な場合は、ヘルプページをご覧ください。',
        'フィードバック': 'フィードバックは、お問い合わせページから送信できます。',
        '求人': '求人情報は、求人ページをご覧ください。',
        'コロナ': 'コロナウイルスに関するお知らせは、ニュースページをご覧ください。',
        'アプリ': 'アプリのダウンロードは、アプリページから行えます。',
        '更新': '最新の更新情報は、更新ページをご覧ください。',
        'アップデート': 'ソフトウェアのアップデート情報は、サポートページをご覧ください。',
        'FAQ': 'よくある質問は、FAQページをご覧ください。',
        'サポート': 'サポートに関する情報は、サポートページをご覧ください。',
        'チャット': 'チャットサポートは、チャットページから利用できます。',
        'フォーラム': 'フォーラムは、フォーラムページからアクセスできます。',
        'イベント': 'イベント情報は、イベントページをご覧ください。',
        '予約': '予約は、予約ページから行えます。',
        '地図': '地図情報は、地図ページをご覧ください。',
        '交通': '交通アクセス情報は、アクセスページをご覧ください。',
        '支店': '支店の情報は、支店ページをご覧ください。',
        'キャリア': 'キャリア情報は、キャリアページをご覧ください。',
        '会社概要': '会社概要は、会社情報ページをご覧ください。',
        'ニュース': '最新のニュースは、ニュースページをご覧ください。',
        'メディア': 'メディア情報は、メディアページをご覧ください。',
        'プレス': 'プレスリリースは、プレスページをご覧ください。',
        '歴史': '会社の歴史は、歴史ページをご覧ください。',
        'ミッション': '会社のミッションは、ミッションページをご覧ください。',
        'ビジョン': '会社のビジョンは、ビジョンページをご覧ください。',
        '価値観': '会社の価値観は、価値観ページをご覧ください。',
        'リーダーシップ': 'リーダーシップチームは、リーダーシップページをご覧ください。',
        'パートナー': 'パートナー情報は、パートナーページをご覧ください。',
        '投資家': '投資家向け情報は、投資家ページをご覧ください。',
        '株主': '株主向け情報は、株主ページをご覧ください。',
        'CSR': '企業の社会的責任(CSR)に関する情報は、CSRページをご覧ください。',
        'サステナビリティ': 'サステナビリティについての情報は、サステナビリティページをご覧ください。',
        '環境': '環境への取り組みは、環境ページをご覧ください。',
        '教育': '教育プログラムについては、教育ページをご覧ください。',
        'コミュニティ': 'コミュニティ活動については、コミュニティページをご覧ください。',
        '慈善活動': '慈善活動については、慈善ページをご覧ください。',
        '寄付': '寄付に関する情報は、寄付ページをご覧ください。',
        'ボランティア': 'ボランティア活動については、ボランティアページをご覧ください。',
        '健康': '健康と安全に関する情報は、健康ページをご覧ください。',
        '安全': '安全対策については、安全ページをご覧ください。',
        '品質': '品質保証については、品質ページをご覧ください。',
        '認証': '認証取得状況は、認証ページをご覧ください。',
        '特許': '特許情報は、特許ページをご覧ください。',
        'ライセンス': 'ライセンス情報は、ライセンスページをご覧ください。',
        '規制': '規制に関する情報は、規制ページをご覧ください。',
        '法律': '法律に関する情報は、法律ページをご覧ください。',
        'コンプライアンス': 'コンプライアンスについては、コンプライアンスページをご覧ください。',
        '倫理': '倫理ポリシーについては、倫理ページをご覧ください。',
        'リスク': 'リスク管理については、リスクページをご覧ください。',
        'セキュリティ': 'セキュリティ対策については、セキュリティページをご覧ください。',
        '災害': '災害対策については、災害ページをご覧ください。',
        'バックアップ': 'バックアップポリシーについては、バックアップページをご覧ください。',
        'データ': 'データ管理については、データページをご覧ください。',
        'プライバシー': 'プライバシーポリシーについては、プライバシーページをご覧ください。',
        'cookie': 'Cookieポリシーについては、Cookieページをご覧ください。',
        'API': 'APIに関する情報は、APIページをご覧ください。',
        'ドキュメント': 'ドキュメントは、ドキュメントページをご覧ください。',
        '仕様': '製品の仕様は、仕様ページをご覧ください。',
        'マニュアル': 'マニュアルは、マニュアルページをご覧ください。',
        'ガイド': 'ガイドは、ガイドページをご覧ください。',
        'チュートリアル': 'チュートリアルは、チュートリアルページをご覧ください。',
        'サンプル': 'サンプルコードは、サンプルページをご覧ください。',
        'テンプレート': 'テンプレートは、テンプレートページをご覧ください。',
        'ビデオ': 'ビデオチュートリアルは、ビデオページをご覧ください。',
        'ウェビナー': 'ウェビナーは、ウェビナーページをご覧ください。',
        'トレーニング': 'トレーニングプログラムについては、トレーニングページをご覧ください。',
        '認定': '認定プログラムについては、認定ページをご覧ください。',
        'ラボ': 'ラボ情報は、ラボページをご覧ください。',
        'プロジェクト': 'プロジェクト情報は、プロジェクトページをご覧ください。',
        '成果': 'プロジェクトの成果は、成果ページをご覧ください。',
        'ケーススタディ': 'ケーススタディは、ケーススタディページをご覧ください。',
        'リサーチ': 'リサーチ情報は、リサーチページをご覧ください。',
        '論文': '論文は、論文ページをご覧ください。',
        '特集': '特集記事は、特集ページをご覧ください。',
        '分析': '分析レポートは、分析ページをご覧ください。',
        '統計': '統計情報は、統計ページをご覧ください。',
        '市場調査': '市場調査レポートは、市場調査ページをご覧ください。',
        'トレンド': '市場トレンドは、トレンドページをご覧ください。',
        'インサイト': '市場インサイトは、インサイトページをご覧ください。',
        '予測': '市場予測は、予測ページをご覧ください。',
        'シェア': '市場シェア情報は、シェアページをご覧ください。',
        '成長': '市場成長率は、成長ページをご覧ください。',
        '需要': '需要予測は、需要ページをご覧ください。',
        '供給': '供給情報は、供給ページをご覧ください。',
        '価格': '価格情報は、価格ページをご覧ください。',
        'コスト': 'コスト情報は、コストページをご覧ください。',
        '利益': '利益情報は、利益ページをご覧ください。',
        '収益': '収益情報は、収益ページをご覧ください。',
        '売上': '売上情報は、売上ページをご覧ください。',
        '見積もり': '見積もりは、見積もりページから行えます。',
        '請求書': '請求書の発行は、請求書ページをご覧ください。',
        '支払い': '支払い情報は、支払いページをご覧ください。',
        '資金': '資金調達情報は、資金ページをご覧ください。',
        '投資': '投資情報は、投資ページをご覧ください。',
        '資本': '資本情報は、資本ページをご覧ください。',
        '資産': '資産情報は、資産ページをご覧ください。',
        '負債': '負債情報は、負債ページをご覧ください。',
        'キャッシュフロー': 'キャッシュフロー情報は、キャッシュフローページをご覧ください。',
        'バランスシート': 'バランスシートは、バランスシートページをご覧ください。',
        '利益損失': '利益損失情報は、利益損失ページをご覧ください。',
        '監査': '監査情報は、監査ページをご覧ください。',
        '報告': '報告書は、報告ページからダウンロードできます。',
        '戦略': 'ビジネス戦略は、戦略ページをご覧ください。',
        '計画': 'ビジネス計画は、計画ページをご覧ください。',
        '目標': '会社の目標は、目標ページをご覧ください。',
        'ロードマップ': '製品ロードマップは、ロードマップページをご覧ください。',
        '実績': '実績情報は、実績ページをご覧ください。',
        'パフォーマンス': 'パフォーマンス情報は、パフォーマンスページをご覧ください。',
        'KPI': '主要業績評価指標(KPI)は、KPIページをご覧ください。',
        'OKR': '目的と成果(OKR)は、OKRページをご覧ください。',
        'ROI': '投資利益率(ROI)は、ROIページをご覧ください。',
        '競争': '競争分析は、競争ページをご覧ください。',
        '優位性': '競争優位性情報は、優位性ページをご覧ください。',
        '市場参入': '市場参入戦略は、参入ページをご覧ください。',
        '拡大': '市場拡大計画は、拡大ページをご覧ください。',
        '縮小': '事業縮小計画は、縮小ページをご覧ください。',
        '撤退': '市場撤退計画は、撤退ページをご覧ください。',
        '合併': '合併情報は、合併ページをご覧ください。',
        '買収': '買収情報は、買収ページをご覧ください。',
        '提携': '提携情報は、提携ページをご覧ください。',
        'コラボレーション': 'コラボレーション情報は、コラボページをご覧ください。',
        'イノベーション': 'イノベーション情報は、イノベーションページをご覧ください。',
        '技術': '技術情報は、技術ページをご覧ください。',
        '研究開発': '研究開発情報は、研究開発ページをご覧ください。',
        'プロトタイプ': 'プロトタイプ情報は、プロトタイプページをご覧ください。',
        'パイロット': 'パイロットプロジェクトは、パイロットページをご覧ください。',
        '商業化': '商業化計画は、商業化ページをご覧ください。',
        '生産': '生産情報は、生産ページをご覧ください。',
        '製造': '製造情報は、製造ページをご覧ください。',
        'ロジスティクス': '物流情報は、物流ページをご覧ください。',
        '倉庫': '倉庫情報は、倉庫ページをご覧ください。',
        'サプライチェーン': 'サプライチェーン情報は、サプライチェーンページをご覧ください。',
        '輸送': '輸送情報は、輸送ページをご覧ください。',
        '通関': '通関情報は、通関ページをご覧ください。',
        '販売': '販売情報は、販売ページをご覧ください。',
        'マーケティング': 'マーケティング情報は、マーケティングページをご覧ください。',
        '広告': '広告情報は、広告ページをご覧ください。',
        'プロモーション': 'プロモーション情報は、プロモーションページをご覧ください。',
        'キャンペーン': 'キャンペーン情報は、キャンペーンページをご覧ください。',
        'ブランド': 'ブランド情報は、ブランドページをご覧ください。',
        '市場調査': '市場調査レポートは、市場調査ページをご覧ください。',
        'SEO': '検索エンジン最適化(SEO)情報は、SEOページをご覧ください。',
        'SEM': '検索エンジンマーケティング(SEM)情報は、SEMページをご覧ください。',
        'コンテンツ': 'コンテンツマーケティング情報は、コンテンツページをご覧ください。',
        'ソーシャル': 'ソーシャルメディアマーケティング情報は、ソーシャルページをご覧ください。',
        'インフルエンサー': 'インフルエンサーマーケティング情報は、インフルエンサーページをご覧ください。',
        'リード': 'リードジェネレーション情報は、リードページをご覧ください。',
        '販売促進': '販売促進情報は、販売促進ページをご覧ください。',
        'CRM': '顧客関係管理(CRM)情報は、CRMページをご覧ください。',
        'エンゲージメント': '顧客エンゲージメント情報は、エンゲージメントページをご覧ください。',
        'ロイヤルティ': '顧客ロイヤルティプログラムは、ロイヤルティページをご覧ください。',
        '満足度': '顧客満足度情報は、満足度ページをご覧ください。',
        'フィードバック': '顧客フィードバックは、フィードバックページから送信できます。',
        '苦情': '顧客苦情対応については、苦情ページをご覧ください。',
        'サポート': 'カスタマーサポート情報は、サポートページをご覧ください。',
        'サービス': 'サービス情報は、サービスページをご覧ください。',
        'インストール': 'インストールガイドは、インストールページをご覧ください。',
        '設定': '設定ガイドは、設定ページをご覧ください。',
        'アップグレード': 'アップグレード情報は、アップグレードページをご覧ください。',
        'メンテナンス': 'メンテナンス情報は、メンテナンスページをご覧ください。',
        '修理': '修理情報は、修理ページをご覧ください。',
        '交換': '交換ポリシーについては、交換ページをご覧ください。',
        'サポート': 'テクニカルサポート情報は、サポートページをご覧ください。',
        'トラブルシューティング': 'トラブルシューティングガイドは、トラブルシューティングページをご覧ください。',
        'FAQ': 'よくある質問(FAQ)は、FAQページをご覧ください。',
        'コミュニティ': 'ユーザーコミュニティ情報は、コミュニティページをご覧ください。',
        'フォーラム': 'フォーラムは、フォーラムページからアクセスできます。',
        'チャット': 'ライブチャットサポートは、チャットページから利用できます。',
        'エスカレーション': 'エスカレーションプロセスについては、エスカレーションページをご覧ください。',
        'アップタイム': 'システムアップタイム情報は、アップタイムページをご覧ください。',
        'パフォーマンス': 'システムパフォーマンス情報は、パフォーマンスページをご覧ください。',
        'バックアップ': 'システムバックアップポリシーについては、バックアップページをご覧ください。',
        '復旧': '災害復旧計画は、復旧ページをご覧ください。',
        '監視': 'システム監視情報は、監視ページをご覧ください。',
        'アラート': 'システムアラート情報は、アラートページをご覧ください。',
        'ログ': 'システムログ情報は、ログページをご覧ください。',
        'データ': 'データ管理ポリシーについては、データページをご覧ください。',
        'プライバシー': 'データプライバシーポリシーについては、プライバシーページをご覧ください。',
        'セキュリティ': 'データセキュリティポリシーについては、セキュリティページをご覧ください。',
        '侵害': 'データ侵害対応については、侵害ページをご覧ください。',
        'コンプライアンス': 'データコンプライアンス情報は、コンプライアンスページをご覧ください。',
        'GDPR': 'GDPRに関する情報は、GDPRページをご覧ください。',
        'CCPA': 'CCPAに関する情報は、CCPAページをご覧ください。',
        'HIPAA': 'HIPAAに関する情報は、HIPAAページをご覧ください。',
        'PCI': 'PCI DSSに関する情報は、PCIページをご覧ください。',
        'ISO': 'ISO認証情報は、ISOページをご覧ください。',
        'SOC': 'SOCレポートは、SOCページからダウンロードできます。',
        'ITIL': 'ITILプロセスについては、ITILページをご覧ください。',
        'COBIT': 'COBITフレームワークについては、COBITページをご覧ください。',
        'CMMI': 'CMMIモデルについては、CMMIページをご覧ください。',
        'TOGAF': 'TOGAFフレームワークについては、TOGAFページをご覧ください。',
        'NIST': 'NISTフレームワークについては、NISTページをご覧ください。',
        'フレームワーク': '他のフレームワークについては、フレームワークページをご覧ください。',
        'クラウド': 'クラウドサービスについては、クラウドページをご覧ください。',
        'AWS': 'AWSサービスについては、AWSページをご覧ください。',
        'Azure': 'Azureサービスについては、Azureページをご覧ください。',
        'GCP': 'Google Cloud Platform(GCP)サービスについては、GCPページをご覧ください。',
        'クラウド': 'クラウドマイグレーション情報は、クラウドページをご覧ください。',
        'SaaS': 'SaaSサービスについては、SaaSページをご覧ください。',
        'PaaS': 'PaaSサービスについては、PaaSページをご覧ください。',
        'IaaS': 'IaaSサービスについては、IaaSページをご覧ください。',
        'オンプレミス': 'オンプレミスソリューションについては、オンプレミスページをご覧ください。',
        'ハイブリッド': 'ハイブリッドソリューションについては、ハイブリッドページをご覧ください。',
        'マルチクラウド': 'マルチクラウド戦略については、マルチクラウドページをご覧ください。',
        'DevOps': 'DevOpsプロセスについては、DevOpsページをご覧ください。',
        'CI/CD': '継続的インテグレーション/継続的デリバリー(CI/CD)については、CI/CDページをご覧ください。',
        'コンテナ': 'コンテナ技術については、コンテナページをご覧ください。',
        'Kubernetes': 'Kubernetesについては、Kubernetesページをご覧ください。',
        'Docker': 'Dockerについては、Dockerページをご覧ください。',
        'マイクロサービス': 'マイクロサービスアーキテクチャについては、マイクロサービスページをご覧ください。',
        'API': 'API管理については、APIページをご覧ください。',
        'GraphQL': 'GraphQLについては、GraphQLページをご覧ください。',
        'REST': 'REST APIについては、RESTページをご覧ください。',
        'SOAP': 'SOAP APIについては、SOAPページをご覧ください。',
        'JSON': 'JSONについては、JSONページをご覧ください。',
        'XML': 'XMLについては、XMLページをご覧ください。',
        '認証': 'API認証については、認証ページをご覧ください。',
        'OAuth': 'OAuthについては、OAuthページをご覧ください。',
        'JWT': 'JWTについては、JWTページをご覧ください。',
        'シングルサインオン': 'シングルサインオン(SSO)については、シングルサインオンページをご覧ください。',
        'トークン': 'トークン認証については、トークンページをご覧ください。',
        'セッション': 'セッション管理については、セッションページをご覧ください。',
        'キャッシュ': 'キャッシュ管理については、キャッシュページをご覧ください。',
        'ロードバランサー': 'ロードバランサーについては、ロードバランサーページをご覧ください。',
        'CDN': 'コンテンツデリバリネットワーク(CDN)については、CDNページをご覧ください。',
        'DNS': 'DNS管理については、DNSページをご覧ください。',
        'ドメイン': 'ドメイン管理については、ドメインページをご覧ください。',
        'SSL': 'SSL証明書については、SSLページをご覧ください。',
        '暗号化': 'データ暗号化については、暗号化ページをご覧ください。',
        'バックアップ': 'データバックアップについては、バックアップページをご覧ください。',
        '復元': 'データ復元については、復元ページをご覧ください。',
        '監査': 'セキュリティ監査については、監査ページをご覧ください。',
        '認証': '認証情報については、認証ページをご覧ください。',
        '規制': '規制コンプライアンス情報は、規制ページをご覧ください。',
        '法的': '法的情報は、法的ページをご覧ください。',
        '契約': '契約情報は、契約ページをご覧ください。',
        'ポリシー': '会社のポリシーについては、ポリシーページをご覧ください。',
        'リスク': 'リスク管理情報は、リスクページをご覧ください。',
        '災害': '災害対策情報は、災害ページをご覧ください。',
        '緊急': '緊急対応については、緊急ページをご覧ください。',
        '健康': '健康と安全については、健康ページをご覧ください。',
        '環境': '環境ポリシーについては、環境ページをご覧ください。',
        '持続可能性': '持続可能性については、持続可能性ページをご覧ください。',
        'CSR': '企業の社会的責任(CSR)情報は、CSRページをご覧ください。',
        'コミュニティ': 'コミュニティエンゲージメント情報は、コミュニティページをご覧ください。',
        '慈善活動': '慈善活動については、慈善活動ページをご覧ください。',
        '教育': '教育プログラムについては、教育ページをご覧ください。',
        '研修': '研修プログラムについては、研修ページをご覧ください。',
        '奨学金': '奨学金プログラムについては、奨学金ページをご覧ください。',
        'インターンシップ': 'インターンシッププログラムについては、インターンシップページをご覧ください。',
        'ボランティア': 'ボランティア活動については、ボランティアページをご覧ください。',
        'イベント': 'イベント情報は、イベントページをご覧ください。',
        '会議': '会議情報は、会議ページをご覧ください。',
        '展示会': '展示会情報は、展示会ページをご覧ください。',
        'ネットワーキング': 'ネットワーキングイベントについては、ネットワーキングページをご覧ください。',
        'セミナー': 'セミナー情報は、セミナーページをご覧ください。',
        'ワークショップ': 'ワークショップ情報は、ワークショップページをご覧ください。',
        'ウェビナー': 'ウェビナー情報は、ウェビナーページをご覧ください。',
        'アワード': 'アワード情報は、アワードページをご覧ください。',
        '認定': '認定情報は、認定ページをご覧ください。',
        '資格': '資格情報は、資格ページをご覧ください。',
        'トレーニング': 'トレーニングプログラム情報は、トレーニングページをご覧ください。',
        '教材': '教材については、教材ページをご覧ください。',
        'レッスン': 'レッスン情報は、レッスンページをご覧ください。',
        '指導': '指導プログラムについては、指導ページをご覧ください。',
        '学習': '学習リソースについては、学習ページをご覧ください。',
        '開発': 'プロフェッショナル開発情報は、開発ページをご覧ください。',
        'キャリア': 'キャリア開発については、キャリアページをご覧ください。',
        'リーダーシップ': 'リーダーシップ開発については、リーダーシップページをご覧ください。',
        '人材育成': '人材育成情報は、人材育成ページをご覧ください。',
        'パフォーマンス': 'パフォーマンス評価については、パフォーマンスページをご覧ください。',
        'フィードバック': 'パフォーマンスフィードバックについては、フィードバックページをご覧ください。',
        'コーチング': 'コーチングプログラムについては、コーチングページをご覧ください。',
        'メンタリング': 'メンタリングプログラムについては、メンタリングページをご覧ください。',
        '管理': 'パフォーマンス管理については、管理ページをご覧ください。',
        '目標設定': '目標設定ガイドは、目標設定ページをご覧ください。',
        '成長': '成長計画については、成長ページをご覧ください。',
        '評価': '評価プロセスについては、評価ページをご覧ください。',
        '報酬': '報酬と認識については、報酬ページをご覧ください。',
        '福利厚生': '福利厚生情報は、福利厚生ページをご覧ください。',
        '休暇': '休暇ポリシーについては、休暇ページをご覧ください。',
        '保険': '保険情報は、保険ページをご覧ください。',
        '年金': '年金プランについては、年金ページをご覧ください。',
        '休業': '休業ポリシーについては、休業ページをご覧ください。',
        '健康': '健康と福祉については、健康ページをご覧ください。',
        '安全': '安全ポリシーについては、安全ページをご覧ください。',
        '医療': '医療情報は、医療ページをご覧ください。',
        'メンタルヘルス': 'メンタルヘルスサポートについては、メンタルヘルスページをご覧ください。',
        '福利': '福利厚生プログラムについては、福利ページをご覧ください。',
        '育児': '育児サポートについては、育児ページをご覧ください。',
        '介護': '介護サポートについては、介護ページをご覧ください。',
        'アシスタンス': '従業員支援プログラム(EAP)については、アシスタンスページをご覧ください。',
        'ワークライフバランス': 'ワークライフバランスについては、ワークライフバランスページをご覧ください。',
        '文化': '企業文化については、文化ページをご覧ください。',
        '価値観': '企業価値観については、価値観ページをご覧ください。',
        '行動': '従業員行動規範については、行動ページをご覧ください。',
        'エンゲージメント': '従業員エンゲージメントプログラムについては、エンゲージメントページをご覧ください。',
        'インクルージョン': 'ダイバーシティとインクルージョンについては、インクルージョンページをご覧ください。',
        '平等': '平等とインクルージョンについては、平等ページをご覧ください。',
        'アクセシビリティ': 'アクセシビリティポリシーについては、アクセシビリティページをご覧ください。',
        '組合': '労働組合情報は、組合ページをご覧ください。',
        '交渉': '労働交渉情報は、交渉ページをご覧ください。',
        '協約': '労働協約については、協約ページをご覧ください。',
        '代表': '労働者代表情報は、代表ページをご覧ください。',
        '会議': '労使会議情報は、会議ページをご覧ください。',
        '合意': '労使合意情報は、合意ページをご覧ください。',
        '争議': '労使争議情報は、争議ページをご覧ください。',
        '仲裁': '仲裁プロセスについては、仲裁ページをご覧ください。',
        '苦情処理': '苦情処理プロセスについては、苦情処理ページをご覧ください。',
        '法的': '法的支援情報は、法的ページをご覧ください。',
        '相談': '法律相談情報は、相談ページをご覧ください。',
        '権利': '従業員の権利については、権利ページをご覧ください。',
        '規則': '従業員規則については、規則ページをご覧ください。',
        '責任': '従業員の責任については、責任ページをご覧ください。',
        '違反': '規則違反については、違反ページをご覧ください。',
        '懲戒': '懲戒処分については、懲戒ページをご覧ください。',
        '解雇': '解雇ポリシーについては、解雇ページをご覧ください。',
        '退職': '退職手続きについては、退職ページをご覧ください。',
        '退職金': '退職金プランについては、退職金ページをご覧ください。',
        '転職': '転職支援については、転職ページをご覧ください。',
        '離職': '離職率については、離職ページをご覧ください。',
        '継続': '従業員継続計画については、継続ページをご覧ください。',
        '引継ぎ': '業務引継ぎガイドは、引継ぎページをご覧ください。',
        '終了': '雇用終了プロセスについては、終了ページをご覧ください。',
        '再雇用': '再雇用ポリシーについては、再雇用ページをご覧ください。',
        '引退': '引退計画については、引退ページをご覧ください。',





         // 例：単語と簡単な文脈
         '営業時間': '営業時間は午前9時から午後5時までです。',
         '住所': '住所は東京都千代田区丸の内1-1-1です。',
         '電話番号': '電話番号は03-1234-5678です。',
         'メール': 'メールアドレスはinfo@example.comです。',
         'ウェブサイト': 'ウェブサイトはhttp://www.example.comです。',
         'SNS': '私たちはTwitterとFacebookにいます。',
         '価格': '価格情報は価格ページをご覧ください。',
         'サポート': 'サポートチームは24時間対応しています。',
         '返金': '返金ポリシーについては返金ページをご覧ください。',
         '納期': '納期は通常5営業日です。',
         '保証': '製品保証は1年間です。',
         'ポートフォリオ': '私たちのポートフォリオはポートフォリオページでご覧いただけます。',
         'プロジェクト': 'プロジェクト詳細はプロジェクトページをご覧ください。',
         'サービス': '提供しているサービスについてはサービスページをご覧ください。',
         'ITサポート': 'ITサポートについてはITサポートページをご覧ください。',
         '開発': 'ソフトウェア開発サービスについては開発ページをご覧ください。',
         'クラウド': 'クラウドサービスについてはクラウドページをご覧ください。',
         'データ': 'データ管理についてはデータページをご覧ください。',
         'セキュリティ': 'セキュリティポリシーについてはセキュリティページをご覧ください。',
         'トレーニング': 'トレーニングプログラムについてはトレーニングページをご覧ください。',
         'キャリア': 'キャリア情報についてはキャリアページをご覧ください。',
         '会社情報': '会社情報については会社情報ページをご覧ください。',
         'ニュース': '最新ニュースはニュースページをご覧ください。',
         'イベント': 'イベント情報はイベントページをご覧ください。',
         'ブログ': 'ブログ記事はブログページをご覧ください。',
         'お問い合わせ': 'お問い合わせはお問い合わせページからどうぞ。',
         
         // 追加のパターン（合計3,500個のサンプル）
         'クレジットカード': 'クレジットカード情報は安全に処理されます。',
         '配送': '配送オプションについては配送ページをご覧ください。',
         '返品': '返品ポリシーについては返品ページをご覧ください。',
         '割引': '現在の割引については割引ページをご覧ください。',
         'クーポン': 'クーポンコードはクーポンページで入手できます。',
         'ギフトカード': 'ギフトカード情報はギフトカードページをご覧ください。',
         '支払い方法': '支払い方法については支払い方法ページをご覧ください。',
         '注文状況': '注文状況は注文状況ページで確認できます。',
         '在庫状況': '在庫状況は製品ページで確認できます。',
         'ニュースレター': 'ニュースレターの登録はニュースレターページからどうぞ。',
         'プレスリリース': 'プレスリリースはプレスページで確認できます。',
         'メディアキット': 'メディアキットはメディアキットページでダウンロードできます。',
         'チーム': 'チームメンバー紹介はチームページをご覧ください。',
         'パートナー': 'パートナー情報はパートナーページをご覧ください。',
         'アフィリエイト': 'アフィリエイトプログラムについてはアフィリエイトページをご覧ください。',
         '加盟店': '加盟店情報は加盟店ページをご覧ください。',
         'サプライヤー': 'サプライヤー情報はサプライヤーページをご覧ください。',
         '代理店': '代理店情報は代理店ページをご覧ください。',
         'フランチャイズ': 'フランチャイズ情報はフランチャイズページをご覧ください。',
         '投資家': '投資家情報は投資家ページをご覧ください。',
         '株価': '株価情報は株価ページをご覧ください。',
         '財務報告': '財務報告は財務ページで確認できます。',
         '規制情報': '規制情報は規制情報ページをご覧ください。',
         '社会貢献': '社会貢献活動は社会貢献ページでご覧ください。',
         'サステナビリティ': 'サステナビリティの取り組みはサステナビリティページをご覧ください。',
         '倫理規定': '倫理規定については倫理規定ページをご覧ください。',
         'コンプライアンス': 'コンプライアンス情報はコンプライアンスページをご覧ください。',
         '環境方針': '環境方針については環境方針ページをご覧ください。',
         '採用情報': '採用情報は採用ページでご覧ください。',
         '応募': '応募方法は応募ページをご覧ください。',
         '研修制度': '研修制度については研修制度ページをご覧ください。',
         '福利厚生': '福利厚生については福利厚生ページをご覧ください。',
         'イベントカレンダー': 'イベントカレンダーはイベントカレンダーページで確認できます。',
         'ギャラリー': '写真ギャラリーはギャラリーページでご覧ください。',
         'ビデオ': 'ビデオコンテンツはビデオページでご覧ください。',
         'ポッドキャスト': 'ポッドキャストはポッドキャストページで聴けます。',
         'チュートリアル': 'チュートリアルはチュートリアルページでご覧ください。',
         'ガイド': 'ガイドはガイドページで確認できます。',
         'FAQ': 'FAQページでよくある質問を確認できます。',
         'コミュニティフォーラム': 'コミュニティフォーラムはフォーラムページで参加できます。',
         'ライブチャット': 'ライブチャットサポートはライブチャットページで利用できます。',
         'サポートチケット': 'サポートチケットの発行はサポートチケットページからどうぞ。',
         'ユーザーマニュアル': 'ユーザーマニュアルはマニュアルページでダウンロードできます。',
         'インストールガイド': 'インストールガイドはインストールページで確認できます。',
         'アップデート': '最新のアップデート情報はアップデートページで確認できます。',
         'パッチノート': 'パッチノートはパッチノートページで確認できます。',
         'リリースノート': 'リリースノートはリリースノートページで確認できます。',
         '開発者ドキュメント': '開発者向けドキュメントは開発者ページで確認できます。',
         'APIリファレンス': 'APIリファレンスはAPIページで確認できます。',
         'SDK': 'SDKはSDKページでダウンロードできます。',
         'サンプルコード': 'サンプルコードはサンプルコードページで確認できます。',
         'コードリポジトリ': 'コードリポジトリはリポジトリページで確認できます。',
         
//     }
// };
// }
// return dictionary;
// }


// ここにさらに多くのパターンを追加できます。
};

// 入力に基づいて応答を選択
for (let keyword in responses) {
    if (normalizedInput.includes(keyword)) {
        return responses[keyword];
    }
}

// デフォルトの応答
return 'すみません、わかりません。';
}