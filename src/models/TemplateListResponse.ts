/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TemplateListResponseResults } from './TemplateListResponseResults';
import { HttpFile } from '../http/http';

export class TemplateListResponse {
    'results'?: Array<TemplateListResponseResults>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<TemplateListResponseResults>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

