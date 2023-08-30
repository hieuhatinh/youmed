/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Navigate from './Navigate';
import Slice from './Slice';

interface ItemNavigate {
    id: number | string;
    uri: string;
    title: string;
}

const listNavigate: ItemNavigate[] = [
    {
        id: 1,
        uri: 'data:image/jpeg;base64,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',
        title: 'Hỗ trợ hô hấp',
    },
    {
        id: 2,
        uri: 'data:image/jpeg;base64,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',
        title: 'Chăm sóc trẻ nhỏ',
    },
    {
        id: 3,
        uri: 'data:image/jpeg;base64,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',
        title: 'Hỗ trợ tiêu hóa',
    },
    {
        id: 4,
        uri: 'data:image/jpeg;base64,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',
        title: 'Hỗ trợ làm đẹp',
    },
    {
        id: 5,
        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAewMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwQFBgEAB//EADwQAAECAwQJAgMFBwUAAAAAAAECAwAEEQUSITEGEzJBUWFxgZEioVKxwSMzQtHhFENicoLw8RUkJSZj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADERAAICAQMBBQcDBQEAAAAAAAABAgMRBCExEhMyQVFxImGBkaGx8MHR4RQjM0LxBf/aAAwDAQACEQMRAD8Am4UzgCTABWbZ0zac1+zyiLys1KOygcSYA1jejdmS6Qmcm3XHN9zAA+DFUrq48snGuUuEJmdFJCYSTZs4tDoxCXcQr2B+cdhbCfDOShKPKM5MSz0o6piYbKHUYEH5jiIsIkNe2YAcjYT0gBLh+0PWAGt/diAFu7ZgBjWwO8ALdwWawAxrYw4wADu12gBcASoAik0qSYA+h2ZKGzrKZl2gA+8jWuq35f4EZ75PHTEsrS5Ykg4VGYrHmm7Y8CQQQSCMiN0d4ONZIel7KZqyZe0CAHml6tZ4pP608mPTon1wyzDZHplgyyNkcxFxASul8wA5GwIAU5tmAGNmqAYAW5tmAGNbEALd2oANoemvOADgCOThnAEgioIpWAPo6nkLclZiv2D7NK7sRURmt2sTfD2LobweCBMX0lLbgF5sXa8RGGee6/A0wxyvEBCbys6AYk8BHEsnZPCJAYZn7LmJBw3FL9SSdxzB7ERs0s44cTPfF56jMGR0fkzS07avPV9TcoLwSeBoCflFstTVHmROvQ6ixZjD9PuG/Y0rMSypqwZsTrKPvG61cT2+lK9YshZCazF5KbabKXixYM+s+o0MTKhqNgGAFuH1mhgBjeKIAW7twAbWKYAF3a7QAFefvAEgAVGA8QBHqeJgDU6P20y3Lps+0fuP3bvwcjy5xCcFNYZKMnF5RdTUsqXIJN9CtlQjzranW9+DZXYpiAo4DcDWnOKsk2kRrRmWJaTdemAC2E4pVjfJ3d442kiyqEpzUY8nz1pGqDTz8vrGFkgC8QFUzAIyIr+hilLGG1sfQyfVmMZYkixlZtywbSl5+RWpyXcTeTXArRWikK/iBr7HfFsZ9lNTjwZp1rVVOuaxJfia9zNTP2dJ22tU9YMww8peLjAISqu80OR5GkexCyE17LPl7aLKniawZmaaelphTTza2lpzSoUiZUdbAKBgIAW5grCuQgBjeKccTzgAHcFYYdIAJvFNTx3wAdBwHiAI5UaH1HzAEig+EeIABhp6ZfSzLpU44s0Skb4A0r2kEtIIlrHmXg6thNHphNSlBGSeJ4V5ePP1V8H7CPU02gtlDtPkvMRM6SWe0glkuTB/80kAdSYxuaNUNDbJ77GftC035iZYmZtCXJRacGU5XTgsfzjjxoRgYi3hqT4Zuq08YwcIbSXj7/D4MiPkygmZMKD7DhSttfTFKx/SSCOfKOP2cw5RdBdp02cNc/qvmWei2j79tvAvFSbPbWStVaXlYVSnngKnlF2nodve4M2u1kdMsR77/NzZ2lY1mTcyhtTKpCdGEvMsegqpwIwOG445x6E6a5PyfmeJTqroReH1R8U9/wDhHcacmXU2NpAEKfWCZKfQmmtpmCNyuIyMdhZKMuiz4PzI21Vzh2tPHivL+DITzDsnOPSztUraVdUBll9c40GM42AU1IBPMQAtwkKoCR0gA2xVNTj1xgAXMFYYYboAG8eJ8wA66mtLo8CAE3lcT5gDQWSVSmj9sT8qAJppsJSumKE5kj59opvk41yaNOjhGeohGfDZlGkIZblppSNY1rCh5BxxGNO6ThzBjxlhJS+Z9VJuTlWtnjK/PUIJTKPvSzqgphxNA4kVFM0ODj+qhnHdotp8fmCOXZGM495fjX57iMhxZa1AF5K1BSUUqQrLDrl44CIJvHSXOMc9b2x9vea7R3Ql2ZKJi2AplnMS+S1/zcByz6Ruo0bftWHkav8A9WMfYp58/wBj6Eyy2w0hplCW20CiUpTQAco9JJLZHgSbk8vkgvyK3tfLvr1sq4LyST62lVqKHkcQcwR4g4ZynwWKxRxJLdfUjWrIzM/YNHABaDA1rSxudTkR1+RiFkHKv3r7ltFsa7s/6vZ+jM1pFcn5aQtlpACZpkBzDJY3H3HaLK59cFLzKrqnVZKt+BnlkpVQEgcjEyoNsApqQD1xgAXDdVQYDlhABNgKTU4mu+ACup+EeBACbyuJ8wA64kbge0AW+iM0hM+7IzNFMTiC0oHKuNB3FR3EcaTWGdTcWmitf0dtOVtOckJBgzjIolWIulJxTeqRQjj+dD5D09kZuMVlH00dbRZXGyx9L/Mk6z9Ap94g2hMNy6PhT9or8h5MWQ0M33ngqt/9iqP+OOfojYWRo7Ztj+uWZvPUoXnDVX6dqRuq09dXdW54+o1l2o7728i21iPiT5i4zYYl6bQgUT6lRxsnGtshLcW6SVkmm6tIiXKKjwdQ8JVdSqjeFa8/8wzgOPWtluVQlGm5ibsGZNyVnCqYkXB+FRN5aBzCqqHI8oqg+zn0Ph7olau2rVq5Wz/R/LYyc5IvSMyuWm0jWoOJzChuI5RoMZFWSlVE4DgIAJsBSaqx6wAKyUqok0FMhAA3lcT5gBwQmuyIATfVTaMATbPbCp+VAFCXkUP9QgDcWIvWWzbxVmmZbT2DaafMxRU8zn6/oa9QkqaseT+7AmLZVLzdra1VGJJDeQxFUlSjzOXiHa4lLPCJQ0ylCtrmWfvgeolRqo15mJhJI5A6dCVEVCSRxAgcyjl9LaSpZFOHGAw5PCK6bmVvXqCozp8UQbyaq61EKXXLWzI/sUw4ttxC6sup9K2XBl0I9xBpTXSyuyMqJ9pFZXivBoVNS5tb/jbVKZe12gSy+lPomEDePqnMHlHYWPPRPn7mW6mPT2tfd+3uf6MysxKPSj62JtspeQaEH5jlFxmI6zdVRJoIAJACk1ViawAVxPAQAkrXTaMAOuJ+EQALEwpiYadFTqnErpxoa/SANzLvokdK3UqUP2e1mkOsL3FaBQjumhjMn0XtP/b7m6Ue10ikuYPD9H/JGm20jSiflnx9jaEqkjmU1SoeCDEWv7zi+JIurk/6aE48xf33RYSjK2ZVlpxwOKbbSkuYeogUrSLoppJMplNOTaR1yYaa31PDMwyjsa5SIzk6pR9Ke6sY51FqoS5Iy1qcVVZqecRyXKKXAMcOkR9QZmNek0pRL6cvScldvz4QJLdYLxcum3LNLDyyiaZVeafTtNr/AAqB9jxETlHtI48TA5PTW9UeHyvuitm2l27o8Zl1N205EqbeCd6k7Q7jEdY7TY5x35XJTqqlVZiPD3XoZNAC01V6ucWmcFZuKonAQBy+v4jADNWj4RACr6uMANuJO73gDR2LMSdsyAsa06pcbNZV5KqKBGVDuUPcRXZXGxYZdTfOmXVH/o9xM0udl7MtR1KbRZOskJ276ZgZFKhuNMx365va6lCb3XD8zfFwUJW1L2H3o+Xp7vImFMy5rElVFt4qbGfOnGLsNnMwik/BkWIl56APQB6AI06kJbD1KhGCx8SDmPr2gSjzgtrBq1NIbKq1bKSeNBn7ROvkyatZhkKyaNaW22wn7txph4p3XiCCe9B4iFe1016Fd3taSqT8G19jCTKdTMONt4JStQA7mNJhBQAoVVicoAK4j4RACy4qm1ADC2neIAXfVXP2gBgbQQDd55mANJJur0isR+ScWf8AUZIh2Wer6qjI147j1EU319cPf4GnSX9jam+Hs/QsJedM9ISNrti66oXXkgZLGBHTA+0Rrn1wU/E1dl2c56d8eHoNm0NIUVAfYvpDjah+E/2feJSwRrcml5x2IUQNR6APQBxaA42pChVKhQ94DO5bWCxVxb5ySLqesWQXiYtZPZRK6ypxAmNILeVi0Fhhr+INimHVRiqj2pzn8Pkd1f8Abqrp8ll/H+DHJq7VbhvKJqTzjUYAVEoNEmgzgDmsV8XsIAZq01yPmAF6xXH2gBmrTTI+YAXfUCRhhygC20bmUyVsSzyjRK/Qs8lfrSALywkau1besRw0BeMyzXcF44chVMY6dpzr+PzPU1DzVVqF5YfwJCHAGVyk0Cm6SUKpUoV+UW52ww4vqVkCLHC89HASW5Nd3WPkMtcV5noImo+ZTK5cR3YxmXM64EMILbCMST8zxMEs8EJWdksy3kwrenFMst2LZQrPzKbqafuUficUd31MRunj+3Dl/T3lWngpN3291fV+SKHSByXlZWWsORJLEoBrDleXz8knmeUW1wUIqKM91srpucuWZ9RKDROXPGJlR1Iviqs6wAVxPA+YAWXFDHDxADNUjgYAXrFZboAO4kiprU84AErUKgHLDKANJOzbgRZulMum+4wkMT7ad6TmffDqIx6hOElcvDn0PT0TV1ctNLx3XqaJ1iXtVhE7Z7iFhYrUHBX5GL/ZsXVEohZOiXZ2IhFLzBuuyiCeKkH6Ghjm68DQnGe6kMZdnFYSzCUc22gKdzBOXgQlGpd6WfiS2LLW4vWzzhUfhvV8n8ol0+LKZ6lRWK0Rpm2C64qztHG0PzKfSt2n2MvzUd55CK5W5fRXu/oiUNPhdrqHhfV+hTzU9L2Ol5qz3jNWi8f9zPLpUngPyGA5mJ11KG/L8ym6+VuFxFcLyMytakqNCTXEk4kmLSg6kBYqrOAOKJQbqcs4A5rFf2IAPVJOGPmAF61XKAD1aefmABLihhhhhlABBCVAE1xxzgCfYtrmzXnG3mw9Jui480RWoyjjWVhnU2nlFxK2G+0oz2iFqpQy56lSzxqnof1FecY/6adbzVLHuPTWuquio6mGfeuSxatfSCXF2e0fU8R+OVeSQexMTVty2lDPoVvT6WW8LceqY5NpW9NUEvYiJev45uZFB2TUxJWWy4jj1ZX2Omj3rM+i/cr7TSGx/wBkttTgIxkZIatKuRp6iOpAh2Mpd+XwWx3+prr/AMMN/N7v9ionLbW9LCUs9oSMiBdS0z6SRzI+nvF8YqKwjJOcpy6pPLKYqLfpTSgywjpEJKQsVVnAHFKuG6nKAPJF/wBR6QAWrTz8wAGtVygAtUnfWAB1issIALVpOJrAA31DAUwwgAggKFTWpxgDyH3WHLzKy2pOAUkkHyIAsGratQIFLQmMeKgfnACX7YtJyqHJ19Q4XyK+IAiBCVC8d+OEAcKig3U0oMqwB0JCxeNawB4qKDdTlzgDwTfFVe0AeUS2bqaUzxgDmtVygBe6AJMARzmYAkboAQrNXUwA5OynoPlACV7Z6wA5GynpACXPvD1gBrewOkALc2z2gBjX3Y7/ADgBbm3ADGtmAAe2h0gBcAf/2Q==',
        title: 'Dinh dưỡng',
    },
    {
        id: 6,
        uri: 'data:image/jpeg;base64,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',
        title: 'Vitamin và khoáng chất',
    },
];

const SliceNavigate = () => {
    return (
        <View style={styles.component}>
            <Slice />
            <FlatList
                data={listNavigate}
                renderItem={({item}) => <Navigate item={item} />}
                style={styles.viewNavigate}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        paddingTop: 10,
        display: 'flex',
        backgroundColor: '#fff',
    },
    viewNavigate: {
        marginVertical: 10,
        flexDirection: 'row',
        display: 'flex',
    },
});

export default SliceNavigate;
