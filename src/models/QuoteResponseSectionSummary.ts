/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { QuoteResponseSummaryRecurringSubtotal } from './QuoteResponseSummaryRecurringSubtotal';
import { HttpFile } from '../http/http';

export class QuoteResponseSectionSummary {
    'total'?: string;
    'subtotal'?: string;
    'oneTimeSubtotal'?: string;
    'recurringSubtotal'?: Array<QuoteResponseSummaryRecurringSubtotal>;
    'totalQty'?: string;
    'discounts'?: any;
    'taxes'?: any;
    'fees'?: any;
    'customFields'?: { [key: string]: string; };
    'totalSectionValue'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "string",
            "format": ""
        },
        {
            "name": "subtotal",
            "baseName": "subtotal",
            "type": "string",
            "format": ""
        },
        {
            "name": "oneTimeSubtotal",
            "baseName": "one_time_subtotal",
            "type": "string",
            "format": ""
        },
        {
            "name": "recurringSubtotal",
            "baseName": "recurring_subtotal",
            "type": "Array<QuoteResponseSummaryRecurringSubtotal>",
            "format": ""
        },
        {
            "name": "totalQty",
            "baseName": "total_qty",
            "type": "string",
            "format": ""
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "any",
            "format": ""
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "any",
            "format": ""
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "any",
            "format": ""
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "totalSectionValue",
            "baseName": "total_section_value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return QuoteResponseSectionSummary.attributeTypeMap;
    }

    public constructor() {
    }
}

