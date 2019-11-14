import React, { FunctionComponent } from 'react';
import './ChampionTips.css';

const ChampionTips: FunctionComponent<{ allytips: string[]; enemytips: string[] }> = ({ allytips, enemytips }) => {
    return (
        <div className="champion-page-tips">
            <div className="champion-page-tips-list">
                <div className="champion-page-tips-list-item">
                    <div className="champion-page-tips-header">Müttefikler Ipuçları</div>
                    <ul>
                        {allytips.map(tip => {
                            return <li key={tip}>{tip}</li>;
                        })}
                    </ul>
                </div>
                <div className="champion-page-tips-list-item">
                    <div className="champion-page-tips-header">Düşman Ipuçları</div>

                    <ul>
                        {enemytips.map(tip => {
                            return <li key={tip}>{tip}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { ChampionTips };
