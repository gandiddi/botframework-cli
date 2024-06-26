/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Label } from "./Label";
import { PredictionStructureWithPluralEvaluation } from "./PredictionStructureWithPluralEvaluation";

export class PredictionStructureWithPluralEvaluationLabelObject
extends PredictionStructureWithPluralEvaluation<Label> {

    constructor(
        text: string,
        labelsPredictedEvaluationArray: number[],
        /** ---- NOTE-DOCUMENTATION ----
         *  labelsPredictedEvaluationArray cells are
         *    index-PredictionTypeArrayOutputIndex.IndexForTruePositive(0): #TP
         *    index-PredictionTypeArrayOutputIndex.IndexForFalsePositive(1): #FP
         *    index-PredictionTypeArrayOutputIndex.IndexForFalseNegative(2): #FN
         */
        labelsPredictedEvaluation: number,
        /** ---- NOTE-DOCUMENTATION ----
         *  labelsPredictedEvaluation can be of following:
         *    PredictionType.TruePositive(1):TP
         *    PredictionType.FalsePositive(2):FP
         *    PredictionType.FalseNegative(4):FN
         *    PredictionType.TrueNegative(8):TN
         */
        labels: Label[],
        labelsConcatenated: string,
        labelsConcatenatedToHtmlTable: string,
        labelsIndexes: number[],
        labelsPredicted: Label[],
        labelsPredictedConcatenated: string,
        labelsPredictedConcatenatedToHtmlTable: string,
        labelsPredictedIndexes: number[]) {
        super(
            text,
            labelsPredictedEvaluationArray,
            labelsPredictedEvaluation,
            labels,
            labelsConcatenated,
            labelsConcatenatedToHtmlTable,
            labelsIndexes,
            labelsPredicted,
            labelsPredictedConcatenated,
            labelsPredictedConcatenatedToHtmlTable,
            labelsPredictedIndexes);
    }
}
