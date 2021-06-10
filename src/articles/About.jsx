import React from 'react';

const About = () => {
    return(
        <div>
            <h2>About</h2>
            <ul>
                <li>名前：平木伸拓</li>
                <li>現住所：東京都豊島区</li>
                <li>学歴：学習院大学法学部政治学科卒業</li>
                <li>生年月日：1997/11/02</li>
                <li>資格：ITパスポート(2021年3月受験)</li>
                </ul>
            <br/>
            <h2>Career</h2>
            <ul>
                <li>2021年3月学習院大学法学部政治学科卒業</li>
                <li>2021年4月フォース株式会社入社</li>
                </ul>
            <ul class="delete-marker">
                <li>現在、エンジニアデビューのため奮起中。</li>
                </ul>
            <br/>
            <h2>Portfolio</h2>
            <ul class="delete-marker">
            <li>SQL・UNIX・JavaScriptなどの研修を通しエンジニアデビューを目指して日々研鑽しております。その他PC自作、ブロックチェーンなど趣味として幅広く学習しております。</li>
            </ul>
        </div>
    );}

export default About;