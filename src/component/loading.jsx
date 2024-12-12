import React, { useState, useEffect } from 'react'

import '../css/loading.css'

function loading() {
    const [isLoading, setIsLoading] = useState(true); // Yükleniyor durumu

    useEffect(() => {
        // Sayfa yüklendikten sonra 2 saniye bekle
        const timer = setTimeout(() => {
            setIsLoading(false); // 2 saniye sonra yükleniyor sayfasını gizle
        }, 3000);

        // Temizleme fonksiyonu
        return () => clearTimeout(timer);
    }, []); // Bileşen yüklendiğinde bir kez çalışır

    return (
        <>
            {isLoading && (
                <div className="loading-page">
                    <div className="loading-container">
                        <div className="loader">💰</div> {/* Para simgesi */}
                        <p className='loading-title'>Yükleniyor...</p>
                    </div>
                </div>
            )}

        </>
    );
}

export default loading