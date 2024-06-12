"use client"
import { FC, ReactEventHandler, SyntheticEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { faBan, faBottleWater, faBox, faHockeyPuck } from "@fortawesome/free-solid-svg-icons";

 const VendingMachine: FC = () => {

    const [areIstructionsOpen, setAreIstructionsOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [coinsType, setCoinsType] = useState(0);
    const [coinsAmount, setCoinsAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    const toggleInstructions = () => setAreIstructionsOpen(!areIstructionsOpen);
    
    const handleReset: ReactEventHandler<Element> = () => {
        setCoinsAmount(0);
        setError(null);
        setSelectedProduct(null);
    }
    
    const handleCoinsAmount: ReactEventHandler<Element> = (e: SyntheticEvent<Element>) => {
        const target = e.target as typeof e.target & {
            value: number;
        };

        setCoinsAmount(+target.value);
    }
    
    const handleProductChange: ReactEventHandler<Element> = (e: SyntheticEvent<Element>) => {
        const target = e.target as typeof e.target & {
            value: string;
        };

        setSelectedProduct(target.value);
    }
    
    const insertCoins: ReactEventHandler<Element> = (e: SyntheticEvent<Element>) => {
        e.preventDefault();
        console.log(selectedProduct, coinsAmount * coinsType);
    }
            
    return (
        <div className={styles.container}>
            <form onSubmit={insertCoins} onReset={handleReset}>
                <fieldset className={styles.products}>
                    <label className={styles.item}>
                        <input type="radio" name="product" value="p1" onChange={handleProductChange} />
                        <span className={styles.figure}>
                            <FontAwesomeIcon icon={faBottleWater} size="4x" />
                            <span className={styles.figcaption}>P1 <b>2.25 €</b></span>
                        </span>
                    </label>
                    <label className={styles.item}>
                        <input type="radio" name="product" value="p2" onChange={handleProductChange} />
                        <span className={styles.figure}>
                            <FontAwesomeIcon icon={faHockeyPuck} size="4x" />
                            <span className={styles.figcaption}>P2 <b>2.50 €</b></span>
                        </span>
                    </label>
                    <label className={styles.item}>
                        <input type="radio" name="product" value="p3" onChange={handleProductChange} />
                        <span className={styles.figure}>
                            <FontAwesomeIcon icon={faBox} size="4x" />
                            <span className={styles.figcaption}>P3 <b>2.75 €</b></span>
                        </span>
                    </label>
                    <label className={styles.item}>
                        <input type="radio" name="product" value="p4" onChange={handleProductChange} />
                            <span className={styles.figure}>
                                <FontAwesomeIcon icon={faBan} size="4x" />
                                <span className={styles.figcaption}>P4 <b>3.00 €</b></span>
                            </span>
                    </label>
                </fieldset>
                { error ? <p className={styles.error}>{error}</p> : null }
                <fieldset className={styles.coins}>
                    <label htmlFor="amount">Your coins amount</label>
                    <input type="number" name="amount" step="5" onChange={handleCoinsAmount} id="amount" />
                    <select value={coinsType} onChange={(e) => setCoinsType(+e.target.value)}>
                        <option value={0}>Coin type</option>
                        <option value={1}>Cents</option>
                        <option value={100}>Euro</option>
                    </select>
                    <div>{totalAmount}</div>
                </fieldset>
                <button type="submit">Insert</button>
                <button type="reset">Clear</button>
            </form>
            <aside>
                <h2 onClick={toggleInstructions}>Instructions:</h2>
                <ol className={`${styles.instructions} ${areIstructionsOpen ? "open" : "collapsed"}`}>
                    <li>Please, insert coin(s) before you choose a product</li>
                    <li>Pay with coins by clicking &quot;Insert&quot; for every coin amount</li>
                    <li>The available products will be highlighted</li>
                    <li>Click on the product you want to buy</li>
                    <li>Conformation will be shown</li>
                    <li>Ones confermed, your product will be dispensed</li>
                    <li>Your bill will be shown including the returned change (if any)</li>
                    <li>Thank you!</li>
                </ol>
            </aside>
            <div className={styles.confermation}>
                <h3>Product</h3>
                <p>{selectedProduct}</p>
                <h3>Price</h3>
                <p>{selectedProduct}</p>
                <h3>Your change</h3>
                <p>{coinsAmount - totalAmount}</p>
            </div>
        </div>
    );
}

export default VendingMachine;