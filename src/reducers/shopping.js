const initialState = { // カテゴリ 情報 // 本来 は カテゴリ ID 取得 API で 取得 す べき
    categories: [
        {
            id: '1',
            name: 'すべて の カテゴリ',
        },
        {
            id: '2502',
            name: 'パソコン、 周辺機器'
        },
        {
            id: '10002',
            name: '本、 雑誌、 コミック'
        }
    ]
};

export default () => initialState;

