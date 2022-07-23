export default function Listing(props) {
    const { items } = props;

    function getCurrency(currencyCode) {
        if (currencyCode === 'USD') {
            return '$';
        } else if (currencyCode === 'EUR') {
            return '€';
        } else {
            return currencyCode + ' ';
        }
    }

    function checkLevel(quantity) {
        if (quantity <= 10) {
            return 'item-quantity level-low';
        } else if (quantity > 10 && quantity <= 20) {
            return 'item-quantity level-medium';
        } else {
            return 'item-quantity level-high';
        }
    }

    return (
        <div className="item-list">{
            items.map(item =>
                item.state !== 'removed' &&
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{
                            item.title.length <= 50 ? item.title : item.title.substring(0, 50) + '...'
                        }</p>
                        <p className="item-price">{getCurrency(item.currency_code)}{item.price}</p>
                        <p className={checkLevel(item.quantity)}>{item.quantity} left</p>
                    </div>
                </div>
            )
        }</div>
    )
}

Listing.defaultProps = {
    items: []
}