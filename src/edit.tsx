/**
 * External dependencies
 */
import type { BlockAttributes } from '@wordpress/blocks';
import { useWooBlockProps } from '@woocommerce/block-templates';
import { createElement } from '@wordpress/element';
import { Button, Dropdown, MenuItem } from '@wordpress/components';
import { VariationQuickUpdateMenuItem } from '@woocommerce/product-editor';
import { chevronRight } from '@wordpress/icons';
// import { registerPlugin } from '@wordpress/plugins';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 */
export function Edit( { attributes }: { attributes: BlockAttributes } ) {
	/**
	 * React hook that is used to mark the block wrapper element.
	 * It provides all the necessary props like the class name.
	 *
	 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
	 */
	const blockProps = useWooBlockProps( attributes );
	return <div { ...blockProps }>
				<VariationQuickUpdateMenuItem
					group={ 'top-level' }
					order={ 20 }
					supportsMultipleSelection={ false }
					onClick={ ( selection ) => {
						console.log( '[click] -> Plugin top level ( 2 )' );
						console.log( 'Type - single items' );
						console.log( 'Selected items: ', selection );
						console.log( 'This button does not call the "onClose" callback. The menu will remain open' );
						console.log( 'The order of this element is > than "** Top level item **" then it should appear behind that item' );
					} }
				>
					** Top level item 2 **
				</VariationQuickUpdateMenuItem>
				<VariationQuickUpdateMenuItem
					group={ 'top-level' }
					order={ 10 }
					supportsMultipleSelection={ true }
					onClick={ ( selection ) => {
						console.log( '[click] -> Plugin top level' );
						console.log( 'Type - multiple and single items' );
						console.log( 'Selected items: ', selection );
						console.log( 'This button does not call the "onClose" callback. The menu will remain open' );
						console.log( 'The order of this element is < than "** Top level item 2 **" then it should appear above that item' );
					} }
				>
					** Top level item **
				</VariationQuickUpdateMenuItem>
				<VariationQuickUpdateMenuItem
					group={ 'pricing' }
					order={ 10 }
					supportsMultipleSelection={ true }
					onClick={ ( { selection, onChange, onClose } ) => {
						const randomNumber = Math.floor( Math.random() * ( 10000 - 1 + 1)) + 1;
						let items = 1;
						console.log( '[click] -> Pricing' );
						console.log( 'Type - multiple and single items' );
						console.log( 'Selected items: ', selection );
						if ( Array.isArray( selection ) ) {
							items = selection.length;
							onChange(
								selection.map( ( { id } ) => ( {
									id,
									sku: `variation_${ Math.floor( Math.random() * ( 10000 - 1 + 1)) + 1 }`,
									regular_price: `${ randomNumber }`,
								} ) )
							);
						} else {
							onChange( {
								sku: `variation_${ randomNumber }`,
								regular_price: `${ randomNumber }`,
							} );
						}
						console.log( `Regular price will be set to: "${ randomNumber }" for ${ items } items` );
						onClose();
					} }
				>
					** Pricing item / Set price **
				</VariationQuickUpdateMenuItem>
				<VariationQuickUpdateMenuItem
					group={ 'secondary' }
					order={ 15 }
					supportsMultipleSelection={ false }
					onClick={ ( selection ) => {
						console.log( '[click] -> Secondary item' );
						console.log( 'Type - single item' );
						console.log( 'Selected items: ', selection );
						console.log( 'This button does not call the "onClose" callback. The menu will remain open' );
					} }
				>
					** Last secondary item **
				</VariationQuickUpdateMenuItem>
				<VariationQuickUpdateMenuItem
					group={ 'downloads' }
					order={ 10 }
					supportsMultipleSelection={ false }
					onClick={ ( { selection, onChange, onClose } ) => {
						const randomNumber = Math.floor( Math.random() * ( 10000 - 1 + 1)) + 1;
						let items = 1;
						console.log( '[click] -> Downloads' );
						console.log( 'Type - single item' );
						console.log( 'Selected item: ', selection );
						console.log( 'Download limits will be set to: 100' );
						if ( Array.isArray( selection ) ) {
							items = selection.length;
							onChange(
								selection.map( ( { id } ) => ( {
									id,
									sku: `variation_${ Math.floor( Math.random() * ( 10000 - 1 + 1)) + 1 }`,
									download_limit: randomNumber,
								} ) )
							);
						} else {
							onChange( {
								sku: `variation_${ randomNumber }`,
								download_limit: randomNumber,
							} );
						}
						console.log( `Download limits will be set to: "${ randomNumber }" for ${ items } items` );
						onClose();
					} }
				>
					** Downloads item / Set download limit **
				</VariationQuickUpdateMenuItem>
				<VariationQuickUpdateMenuItem
					group={ 'inventory' }
					order={ 10 }
					supportsMultipleSelection={ true }
					isCustomGroup={ true }
					onClick={ ( { selection, onChange, onClose } ) => {
						const randomNumber = Math.floor( Math.random() * ( 10000 - 1 + 1)) + 1;
						let items = 1;
						console.log( '[click] -> Inventory' );
						console.log( 'Type - multiple and single items' );
						console.log( 'Selected item: ', selection );
						console.log( 'Stock status will be set to: outofstock' );
						if ( Array.isArray( selection ) ) {
							items = selection.length;
							onChange(
								selection.map( ( { id } ) => ( {
									id,
									sku: `variation_${ Math.floor( Math.random() * ( 10000 - 1 + 1)) + 1 }`,
									stock_status: 'outofstock',
								} ) )
							);
						} else {
							onChange( {
								sku: `variation_${ randomNumber }`,
								stock_status: 'outofstock',
							} );
						}
						console.log( `Stock status will be set to: "outofstock" for ${ items } items` );
						onClose();
					} }
				>
					** Inventory item / Set stock status: outofstock **
				</VariationQuickUpdateMenuItem>
				<p>This block adds some slotFills</p>
		</div>;
}

