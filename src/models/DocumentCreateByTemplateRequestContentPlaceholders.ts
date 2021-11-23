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

import { DocumentCreateByTemplateRequestContentLibraryItems } from './DocumentCreateByTemplateRequestContentLibraryItems';
import { HttpFile } from '../http/http';

export class DocumentCreateByTemplateRequestContentPlaceholders {
    'contentLibraryItems'?: Array<DocumentCreateByTemplateRequestContentLibraryItems>;
    'blockId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contentLibraryItems",
            "baseName": "content_library_items",
            "type": "Array<DocumentCreateByTemplateRequestContentLibraryItems>",
            "format": ""
        },
        {
            "name": "blockId",
            "baseName": "block_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentCreateByTemplateRequestContentPlaceholders.attributeTypeMap;
    }

    public constructor() {
    }
}

